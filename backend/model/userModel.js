const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: [true,"Please enter name"]
    },
    password:{
        type:String,
        required: true
    }

},
{
    timestamps:true
});

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;