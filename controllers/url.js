const { nanoid } = require("nanoid");
const URL = require("../models/url");
const PORT=4000;


//controller function to add new short id  for a url sent by user into database 


async function handlegenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "URL is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL:body.url,
    visitHistory:[],
  });
 

res.redirect(`http://localhost:${PORT}/home`);

}

// controller function to see the details of the short id 


async function hanndleAnalytics(req,res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOne({ shortId: shortId });
  if (!entry) return res.status(404).json({ message: "URL not found" });
  return res.status(200).json({totalclicks:entry.visitHistory.length,visitHistory:entry.visitHistory});
  
}

module.exports = {
  handlegenerateNewShortUrl,
  hanndleAnalytics,
};
