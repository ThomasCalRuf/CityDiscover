module.exports = (server) => {
    const userController = require("../controllers/userController");

    server.get("/user", userController.getAllUsers)
    .post("/user", userController.createUser)
    .get("/user/:id", userController.getUserById)
    .put("user/:id", userController.updateUser)
    .delete("user/:id", userController.deleteUser);
}