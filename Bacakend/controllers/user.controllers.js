const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const errorHandel = (res, message) => {
    return res.status(400).json({
        message,
    });
};

const createUser = async (req, res) => {
    console.log(req.bod)
    try {

        const { fullname, phone, email } = req.body;
        if (!fullname) {
            return errorHandel(res, " Fullname is  required");
        }

        const user = await User.findOne({
            $and: [{ email }, { phone }],
        });

        if (user) {

            res.status(403).send({
                message: " User is Already Exist  !!!",
            });
            return;
        }
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            if (err) {
                res.send(err);
            }
            const user = new User({
                fullname,
                email,
                password: hash,
                phone,
            });
            user.save().then((response) => { res.send(response); }).catch((error) => { res.send(error) });


        });


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    };
}


const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
    } catch (error) {
        return res.status(500).send({
            message: " User not found",
        });
    }
};

const getUsers = async (req, res) => {

    try {
        const users = await User.find();
        res.send(users);

    } catch (error) {
        res.send(error);
    }
};

const getUser = async (req, res) => {
    try {
        console.log(res.user);
        const userId = req.params.userId;
        if (res.user._id === userId) {
            const users = await User.findOne({ _id: userId });
            return res.send(users);
        } else { return res.status(401).send({ status: false, messange: "Unauthorized user" }) }

    }
    catch (error) {
        res.send(error);
    }
};

module.exports = { createUser, login, getUser, getUsers };