const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyparser.json())
app.use(morgan('dev'))

app.post('/api/lowercase', (req, res) => {
    setTimeout(
        () => {
            const isErrorResponse = Math.random() < 0.5
            if (isErrorResponse) {
                return res.status(500).json({ message: 'There was a very strange error.' })
            }
            return res.json({ output: req.body.input.toLowerCase() })
        },
        (Math.ceil(Math.random())+1 * 1000)
    )
})

app.post('/api/uppercase', (req, res) => {
    setTimeout(
        () => {
            const isErrorResponse = Math.random() < 0.5
            if (isErrorResponse) {
                return res.status(500).json({ message: 'There was a very strange error.' })
            }
            return res.json({ output: req.body.input.toUpperCase() })
        },
        (Math.ceil(Math.random())+1 * 1000)
    )
})

app.listen(3001, () => console.log('API is listening on port 3001.'))