let express = require('express')
let stateRouter = express.Router()
const State= require('../models/State.js')


stateRouter.get('/',(req,res)=>{
    State.find().then((states) => { 
        res.json(states);
    });
});


module.exports= stateRouter;