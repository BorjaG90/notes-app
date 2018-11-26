const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.send('Notas desde la BD');
});

module.exports = router;