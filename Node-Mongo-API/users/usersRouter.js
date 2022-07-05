const router = require("express").Router();
const users = require("./usersCtrl")

//get all users
router.get("/", users.getAll);

//get user by id
router.get("/:id", users.getOne);

//delete user by id
router.delete("/:id", users.deleteOne);

module.exports = router


