/**
 * Created by clstrfvck on 16/03/2017.
 */
const express = require('express');
const router = express.Router();


router.get("/", function(req,res) {
    return res.json("users endpoint operational")
});

module.exports = router;