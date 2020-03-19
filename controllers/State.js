let express = require('express')
let stateRouter = express.Router()
const State= require('../models/State.js')


stateRouter.get('/',(req,res)=>{
    State.find().then((states) => { 
        res.json(states);
    });
});




stateRouter.post('/', (req, res) => {
    State.create(req.body).then(() => {
        res.status(200).end();
    });
});


module.exports= stateRouter;