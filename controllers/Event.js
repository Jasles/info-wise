let express = require('express')
let eventRouter = express.Router()
const Event= require('../models/Event.js')


eventRouter.get('/',(req,res)=>{
    Event.find().then((events) => { 
        res.json(events);
    });
});

eventRouter.get('/cityname/:name', (req,res)=>{
    Event.find({city:req.params.name}).then(event => { 
         console.log('id')
         res.json(event);
     }); 
 });


eventRouter.post('/', (req, res) => {
    Event.create(req.body).then(() => {
        res.status(200).end();
    });
});

module.exports= eventRouter;