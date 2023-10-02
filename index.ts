import express from "express";

const app = express();
const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, ExpressTS!");
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port: ${port}`);
});
