const mongoose = require("mongoose");
mongoose.connect("process.env.MongoDB_API", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

db.on("error", function (err) {
    console.error.bind(console, `Error connecting to mongoDB : $(err)`);
});
db.once("open", function () {
    // console.log("Moongose connected to Database");
});

module.exports = db;
