const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')

//const hotelRouter = require('./controllers/Hotel')
//const serviceRouter = require('./controllers/Service')
//const guestRouter = require('./controllers/Guest')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.use(logger('dev'))

//app.use('/guest', guestRouter)
//app.use('/service', serviceRouter)
//app.use('/',hotelRouter)


const port = process.env.PORT || 3005;

app.listen(port,() => {
    console.log('server is listeening'+ port);
    });