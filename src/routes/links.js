const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) =>{
    res.render('links/add');
});

router.post('/add', async (req, res) =>{
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    console.log(newLink);
    
    
    res.send('received');
});

module.exports = router;