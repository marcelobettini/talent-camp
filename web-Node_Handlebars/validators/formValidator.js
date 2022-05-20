const { check, validationResult } = require("express-validator") //body or check
const validateForm = [
    check("name", "Debe ingresar su nombre").exists().isLength({ min: 2 }),
    check("email", "Debe ingresar un email válido").exists().isEmail(),
    check("message", "Mensaje debe contener entre 10 y 300 caracteres").exists().trim().isLength({ min: 10, max: 300 }),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const formData = req.body
            const arrWarnings = errors.array()
            res.render("form", { arrWarnings, formData })
        } else {
            return next()
        }
    }]

module.exports = { validateForm }
