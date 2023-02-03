import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import usersRoutes from './routes/users.js'

const app = express()
const PORT = 4000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send('Hello, its homepage'))

//Connect to my own DB
mongoose.connect(
    `mongodb+srv://myassuser:Wholetthedogsout@cluster0.p4u5tqu.mongodb.net/cluster0?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('DB connected bitch')
    }
)

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))