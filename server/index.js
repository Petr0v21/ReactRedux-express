import express from "express";
import cors from "cors";
import fs from "fs";
import data from "./db.json";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/db", async (req, res) => {
  // jsondb[req.body.message] = req.body.message
  // let stringdb = JSON.stringify(data);
  data[req.body.message] = req.body;
  fs.writeFile("./db.json", JSON.stringify(data), function (err) {
    if (err) return console.log(err);
  });
  res.send({ message: "text has been written" });
});
app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.get("/users", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json"));
  res.send({
    users: data.users,
    posts: data.posts,
  });
});
app.listen(4000, () => console.log("Server is running"));
