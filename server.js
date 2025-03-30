//importing modules

const express = require("express");
const app = express();
// Middle ware for json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");

//Router for /url

const urlRoute = require("./routes/url");
//Router for home page

const StaticRoute = require("./routes/StaticRouter");






//mongo db connection
const { connectToMongoDB } = require("./connection");

// schema for db
const URL = require("./models/url");

// mongo db connection

const PORT = 4000;
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

// Setting up path for Ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// setting up short url

app.use("/url", urlRoute);

// Redirect urls

app.get("/urls/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortId,
    },
    {
      $push: {
        visitHistory: {
          applyTimestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.use("/home", StaticRoute);



//setting the server 
app.listen(PORT, () => {
  console.log(`Server started in PORT:${PORT}`);
});
