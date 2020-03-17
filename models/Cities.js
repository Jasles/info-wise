const mongoose= require('../models/connection');
const Schema= mongoose.Schema;


const Cities= new Schema({
   name: String,
   state:  {
        type: Schema.Types.ObjectId,
        ref: 'State',
   },
   

});

 module.exports= mongoose.model('Cities', Cities);