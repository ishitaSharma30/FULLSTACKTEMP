let mongoose=require("mongoose");
let imagePath = "./image/";
const blogSchema = new mongoose.Schema({
    title : String,
    body : String,
    date : {type : Date, default : Date.now()},
    image : {
        type : String,
        get : v => `${imagePath}/${v}`
    },
    comments : [{
        postedBy : String,
        body : String,
        date : {type : Date , default : Date.now()}
    }],
    likes : Number
});

module.exports = mongoose.model("Blog",blogSchema);