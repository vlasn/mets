/**
 * Created by clstrfvck on 16/03/2017.
 */
const express = require('express');
const router = express.Router();

//    localhost:3080/api/user

router.get("/", function(req,res) {
    /*
        Most of the "real" backend code will sit in files like this - this is to keep the server.js small and
        lean, and to keep things modular. Breaking this file would not break other endpoints.
     */
    return res.json("users endpoint operational - brought to you by Express Router!")
});

router.get("/sup", (req,res)=>{
   return res.json("sup")
});


module.exports = router;




