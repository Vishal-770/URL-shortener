const express = require("express");
const { handlegenerateNewShortUrl,hanndleAnalytics } = require("../controllers/url");
const router = express.Router();

router.post("/", handlegenerateNewShortUrl);

router.get("/analytcis/:shortId", hanndleAnalytics);




module.exports=router;


