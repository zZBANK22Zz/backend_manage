module.exports = app => {
    const file_controller = require("../controllers/file.controllers");
    var router = require("express").Router();
    router.post("/upload", file_controller.upload);
    router.get("/:name", file_controller.download);
    console.log("file router");
    app.use("/api/file", router);
};