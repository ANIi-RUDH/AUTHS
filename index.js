import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("This is from get / route")
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  console.log("this is from get /login route")
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  console.log("this is from get /register route")
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log("This is from post /register route",req.body)
});

app.post("/login", async (req, res) => {
  console.log("this is from post /login route",req.body)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
