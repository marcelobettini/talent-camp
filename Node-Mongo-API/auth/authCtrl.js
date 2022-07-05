const User = require("../users/usersModel");
const { hashPassword, checkPassword } = require("../utils/handlePassword")
//REGISTER
const register = async (req, res, next) => {
    const { fullName, userName, email } = req.body
    const password = await hashPassword(req.body.password)
    const data = { fullName, userName, email, password }
    const newUser = new User(data); //nueva instancia del modelo User
    newUser.save((error) => {
        if (error) {
            next(error);
        } else res.status(200).json({ message: "new user created" })
    })

}
//LOGIN
const login = async (req, res, next) => {
    const user = await User.find().where({ userName: req.body.userName });
    if (!user.length) {
        return res.status(401).json({ message: "Incorrect user name or password " });
    }
    const hashedPassword = user[0].password;
    const match = await checkPassword(req.body.password, hashedPassword);
    match ? res.status(200).json({ message: "access granted" }) : res.status(401).json({ message: "Incorrect user name or password " });
}

module.exports = { register, login }
