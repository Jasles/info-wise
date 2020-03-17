let express = require('express')
let eventRouter = express.Router()
const Event= require('../models/Event.js')


eventRouter.get('/',(req,res)=>{
    Event.find().then((event) => { 
        res.json(event);
    });
});

eventRouter.get('/:id', (req,res)=>{
   Event.find({city:req.params.id}).then(event => { 
        console.log('id')
        res.json(event);
    });
});
module.exports= eventRouter;