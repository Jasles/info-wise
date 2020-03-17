const mongoose= require('../models/connection');
const Schema= mongoose.Schema;


const Event= new Schema({
    name: String,
    city:  {
    type: Schema.Types.ObjectId,
    ref: 'City',
    comment: String,
    image: String,
    time: String,
    
},
   
   

});

 module.exports= mongoose.model('Event', Event);