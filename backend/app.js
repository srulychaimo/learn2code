const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const lecturers = require("./data/lecturers");
const languages = require("./data/languages");

app.use(cors());
app.use(morgan("dev"));

app.get("/api/lecturers", (req, res) => {
  res.send(lecturers);
});

app.get("/api/languages", (req, res) => {
  res.send(languages);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
