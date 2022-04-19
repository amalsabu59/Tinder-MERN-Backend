const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    user_id: {
        type:String
    },
    first_name:{
        type:String
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

module.exports = mongoose.model("Cards",cardSchema)