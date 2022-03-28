const express = require('express');
let router = express.Router();

router.get('/:id', (req, res) => {
    res.send('chirps')
});

router.post('/', (req, res) => {
    res.sendStatus(200);
})

router.put('/:id', (req, res) => {
    res.sendStatus(200);
})

router.delete('/:id', (req, res) => {
    router.sendStatus(200);
})

module.exports = router;