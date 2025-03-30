const express = require("express");
const router = express.Router();
const URL = require("../models/url");


// routing /url path 

router.get("/",async (req, res) => {
  const allUsers = await URL.find({});

 
  return res.render("home", {
    urls: allUsers,
  });
});

router.get("/signup",async(req,res)=>{
  return res.render("signup");
});

module.exports=router;


