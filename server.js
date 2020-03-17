const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')

const eventRouter = require('./controllers/Event')
const cityRouter = require('./controllers/City')
const stateRouter = require('./controllers/State')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static(`${__dirname}/client/build`))

app.use(logger('dev'))

app.use('/api/state', stateRouter)
app.use('/api/city', cityRouter)
app.use('/api/event',eventRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const port = process.env.PORT || 3005;

app.listen(port,() => {
    console.log('server is listeening'+ port);
    });