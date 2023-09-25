const authJwt = require("../middleware/auth.jwt");
module.exports = (app)=>{
    const user_controllers = require("../controllers/user.controllers");
    var router = require("express").Router();
    router.get("/:us", user_controllers.validUsername);
    router.post("/signup", user_controllers.createNewUser);
    router.post("/login", user_controllers.login);
    router.get("/", authJwt, user_controllers.getAllRecords);
    router.put("/:id", authJwt, user_controllers.updateUserCtrl);
    router.delete("/:id/:p1/:p2", authJwt, user_controllers.deleteUser);
    app.use("/api/auth", router);
};