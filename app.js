import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'

const app = express()
const host = process.env.HOST || '127.0.0.1' //Local host
const port = parseInt(process.env.PORT ?? 8000)
const protocol = process.env.PROTOCOL || 'http'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

app.listen(port, host, () => {
    init()
    console.log(`Server is listening on ${protocol}://${host}:${port}`)
})

nodeCleanup(cleanup)

export default app
