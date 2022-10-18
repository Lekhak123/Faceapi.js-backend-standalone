const express = require("express");

const app = express();

app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json({limit: '50mb'}));

const faceRoute = require("./routes/Face");

app.use("/api/image", faceRoute);

app.listen(8800, () => {
    console.log("Backend is running!");
})