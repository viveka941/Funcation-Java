const express = require("express");

const app = express();

function userAuth(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kindeyId = req.query.kindeyId;

  if (username !== "vivek" && password !== "pass") {
    res.status(400).json({
      msg: " woring input",
    });
  } else {
    next();
  }
}

app.get("/health", userAuth, (req, res) => {
  if (username === "vivek" && password === "pass") {
    if (kindeyId == 1 || kindeyId == 2) {
      res.json({
        msg: "your kindey is fine",
      });
    } else {
      res.json({
        msg: " bad health",
      });
    }
  }
  res.status(400).json({
    msg: " woring input",
  });
});

app.listen(3000, () => {
  console.log("listen port 3000");
});
