import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import usersRoute from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users', usersRoute)

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from app')
})

export default app
