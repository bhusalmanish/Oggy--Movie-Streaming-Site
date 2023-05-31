const express = require("express")
const app = express();
const mongoose = require("mongoose");
const DBURL = require('./db/Database.js');
const { userRoutes } = require("./routes/user.js");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send(" welcome to Home")
})

app.get("/api", (req, res) => {
    res.send(" manish  hi ");
})

async function main() {
    await mongoose.connect(DBURL);
}
main()
    .then(() => console.log("🙌. Database Connected"))
    .catch((err) => console.log("ERRor mongose" + err));

userRoutes(app);
app.listen(5000, () => {
    console.log("❤️ Server Start")
})



