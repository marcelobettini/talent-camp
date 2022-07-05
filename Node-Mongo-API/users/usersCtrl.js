const User = require("./usersModel");


//get all users
const getAll = (req, res, next) => {
    User.find()
        .then((data) => {
            if (data.length) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: "Resource not found" })
            }
        })
        .catch((error) => next(error))
};

//get user by id
const getOne = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (error) {
        res.send(error)
    }


}

//delete user by id
const deleteOne = (req, res) => {

}

module.exports = { getAll, getOne, deleteOne }