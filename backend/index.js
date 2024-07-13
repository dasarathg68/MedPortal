import express, { json } from "express";
import cors from "cors";

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
