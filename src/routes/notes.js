const router = require('express').Router();

router.get('/notes/add', (req, res) =>{
    res.render('notes/new-note');
});

router.post("/notes/new-note", (req, res) => {
    console.log(req.body);
    res.send("OK");
});

router.get('/notes', (req, res) => {
    res.send('Notas desde la BD');
});

module.exports = router;