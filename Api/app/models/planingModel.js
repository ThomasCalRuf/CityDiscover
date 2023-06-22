const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let planingSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    lieuxid:{
        type: String,
        required: true
    },
    heurestart:{
        type: Date,
        require: true
    },
    heureend:{
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('Planing', planingSchema);