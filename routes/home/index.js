var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home/index');
});

router.get('/games/truth-or-dare', function(req, res, next) {
    res.render('games/truth-or-dare.hbs');
});

// Thêm các route khác tương tự
// router.get('/game/other-game', function(req, res, next) {
//     res.render('game/other-game');
// });

module.exports = router;