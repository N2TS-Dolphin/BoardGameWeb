const mongoose = require('mongoose');

const truthSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Truth', truthSchema);