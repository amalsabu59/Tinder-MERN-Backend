const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        require: true,
        min: 6
    },

    dob_day: {
        type: Number
    },
    dob_month: {
        type: Number
    },
    dob_year: {
        type: Number
    },

    gender_identity: {
        type: String
    },
    gender_interest: {
        type: String
    },
    url: {
        type: String
    },
    about: {
        type: String
    },
    matches: {
        type: Array
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)