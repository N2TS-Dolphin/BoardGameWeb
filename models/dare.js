const mongoose = require('mongoose');

const dareSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Dare', dareSchema);
