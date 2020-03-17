const mongoose= require('../models/connection');
const Schema= mongoose.Schema;


const States= new Schema({
   name: String,
   
    
});

 module.exports= mongoose.model('States', States);
