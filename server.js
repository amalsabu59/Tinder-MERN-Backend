const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cors = require("cors")
const cardRoutes = require("./routes/cards");
const authRoutes = require("./routes/Auth");



//App config
const app = express();
const port = process.env.PORT || 8001

dotenv.config()
//Middlewares
app.use(express.json());
app.use(Cors());



//DB config
mongoose.connect(process.env.MONGO_URI, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=> console.log("connected  to mongodb !!"))

.catch(err => console.log(err.message));

app.use("/api/cards",cardRoutes);
app.use("/api/auth",authRoutes);



//Listener
app.listen(port, ()=> {
    console.log(`listening in : ${port}`)
})
