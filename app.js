import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'

const app = express()

// SETUP LOCAL
// const host = process.env.HOST ?? '127.0.0.1'
// const port = parseInt(process.env.PORT ?? 8000)

// SETUP HEROKU
const port = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

// LOCAL
// app.listen(port, host, () => {
//     init()
//     console.log(`Server is listening on http://${host}:${port}`)
// })

// HEROKU
app.listen(port, () => {
    init()
    console.log(`Server is listening on ${port}`); //HEROKU
})

nodeCleanup(cleanup)

export default app
