const express = require("express");
const path = require("path");

const app = express();

const DIST_FOLDER = path.join(__dirname, "dist", "demo-poc");

app.use(express.static(DIST_FOLDER));

app.use("/assets", express.static(path.join(DIST_FOLDER, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, "index.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(DIST_FOLDER, "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
