import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import recipesRouter from './routes/recipes.js'

// Charger les variables d'environnement
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API YummyingBird',
    version: '1.0.0',
    endpoints: {
      recipes: '/api/recipes'
    }
  })
})

app.use('/api/recipes', recipesRouter)

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Route non trouvée'
  })
})

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Une erreur est survenue sur le serveur',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur API démarré sur http://localhost:${PORT}`)
  console.log(`📚 Documentation disponible sur http://localhost:${PORT}`)
})
