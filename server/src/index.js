import express from 'express'
import { applicationsRouter } from './routes/applications.js'

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({status: 'ok'})
})

app.use('/api/applications', applicationsRouter)

app.use((req, res) => {
    res.status(404).json({error: 'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})