const life = require("./consts")
console.log(life)


const handleComplaints = function (complaint) {
    if (complaint.type === life.finance) {
        console.log("Money doesn’t grow on trees, you know.")
    }
    if (complaint.type === life.emotions) {
        console.log("It’ll pass, as all things do, with time.")
    }
    if (complaint.type === life.weather) {
        console.log("It is the way of nature. Not much to be done.")
    }
}
module.exports = handleComplaints