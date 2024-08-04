const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Jogos funcionando!');
});

module.exports = router;
