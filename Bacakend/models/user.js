const mongoose = require("mongoose");
const { Schema } = mongoose;

UserSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },

    },
    {
        timeStamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports.User = User;