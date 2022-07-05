const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    { timestamps: true }
)

UserSchema.set("toJSON", {
    transform(doc, ret) {
        delete ret.__v;
        delete ret._id;
        delete ret.password;
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User;
