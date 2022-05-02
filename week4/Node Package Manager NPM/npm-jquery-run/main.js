$("#click").on('click', function () {
    $("#hi").text("Hello ,My Friend")
    setTimeout(() => {
        $("#hi").text(" You Are Awesome !")
    }, "1000")
    setTimeout(() => {
        $("#hi").text("You Are Great !")
    }, "2000")
    setTimeout(() => {
        $("#hi").text(" You Areee Theee Best ☺ !")
    }, "3000")
    setTimeout(() => {
        $("#hi").empty()
    }, "4000")

})
$("#box").on('click', function () {
    $("#box").css("background-color", "#f39c12")
})
const urllib = require('urllib')

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function (err, response) {
    console.log(response.toString())
})