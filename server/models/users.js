const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    contact:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


var Users = mongoose.model('User', userSchema,"User");

module.exports = Users;