const express = require('express');
const router = express.Router();
///⬇️ TYPICALLY POOL WOULD BE REQUIRED AND A DB WOULD BE ACCESSED. THE GALLERY.DATA.js FILE IS REQUIRED REQUIRED INSTEAD.
// WHEN GET IS CALLED IT WILL GET THE INFORMATION FROM THE GALLERY.DATA.js FILE
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "gallery"`)
    .then(dbRes=>{
        res.send(dbRes.rows);
    })
    .catch(error=>{
        console.log('Unable to get tasks from DB: ', error);
    });
}); // END GET Route

module.exports = router;