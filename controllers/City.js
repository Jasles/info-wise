let express = require('express')
let cityRouter = express.Router()
const City= require('../models/Cities.js')

cityRouter.get('/',(req,res)=>{
    City.find().then((cities) => { 
        res.json(cities);
    });
});

cityRouter.get('/:id', (req,res)=>{
    City.find({state:req.params.id}).then(city => { 
        console.log('id')
        res.json(city);
    });
});

module.exports= cityRouter;