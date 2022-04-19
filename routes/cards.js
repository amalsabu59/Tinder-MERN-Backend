const router = require("express").Router();
const Cards = require("../models/dbcards");


router.post('/tinder',(req,res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })

}),
router.get('/tinder', (req,res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
            //console.log(err);
        }else {
            res.status(200).send(data)
        }
    })
})
module.exports = router