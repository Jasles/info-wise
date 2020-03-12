const mongoose= require('../db/connection');
const Schema= mongoose.Schema;


const States= new Schema({
   Cities:'String'

    
});

 module.exports= mongoose.model('States', States);