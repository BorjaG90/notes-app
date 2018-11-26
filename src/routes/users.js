const router = require('express').Router();

router.get('/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/sigup', (req, res) => {
    res.send('Form de autenticacion');
});

module.exports = router;