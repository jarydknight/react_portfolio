const express = require("express");
const secure = require("express-force-https")
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(secure);
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

app.listen(port, () => {
    console.log(`server started on port ${port}`)
});