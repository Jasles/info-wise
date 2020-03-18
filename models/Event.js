const mongoose= require('../models/connection');
const Schema= mongoose.Schema;


const Event= new Schema({
    name: String,
    //Reference city by name instead of ID
    city: String,
    comment: String,
    image: String,
    time: String,
    
})

 module.exports= mongoose.model('Event', Event);