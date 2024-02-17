const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    Description: {
        type: String,
        require: true
    },

    image: {
        type: String,
        require: true
    },

    date: {
        type: String,
        require: true,
    },
    done: {
        type: Boolean,
        default: false,

    },
},
    { timestamp: { type: Date, default: Date.now() } }

)

const imageModel = mongoose.model('image', ImageSchema);

module.exports = imageModel

