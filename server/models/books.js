const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var bookSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    imgUrl:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
});


var Books = mongoose.model('Book', bookSchema);

module.exports = Books;