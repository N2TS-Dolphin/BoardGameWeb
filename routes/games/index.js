const express = require('express');
const router = express.Router();

const Truth = require('../../models/truth');
const Dare = require('../../models/dare');

router.get('/', (req, res) => {
    res.render('games/truth-or-dare');
});

router.get('/truth', async (req, res) => {
    try {
        const count = await Truth.countDocuments();
        const random = Math.floor(Math.random() * count);
        const truth = await Truth.findOne().skip(random);
        res.json(truth);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/dare', async (req, res) => {
    try {
        const count = await Dare.countDocuments();
        const random = Math.floor(Math.random() * count);
        const dare = await Dare.findOne().skip(random);
        res.json(dare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
