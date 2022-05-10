const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}
app.get('/books/:bookID', function (request, response) {
    let bookID = request.params.bookID
    response.send(data[bookID])
})
// Now Let start Listeining
const port = 4000
//route - root base
app.get('/', function (req, res) {
    console.log("XOXOXOXO")
    res.send("Hey Welcome to My Server")
})
//workers data root 
app.get('/workers', function (req, res) {
    const workersInfo = {
        1: { name: "Hamode", email: "Hamodemassarwi50@gmail.com" }
    }
    res.send(workersInfo)
})
app.get('/user', function (req, res) {
    const workersInfo = {
        1: { name: "Elena", email: "ElenaSpiederman@gmail.com" }
    }
    res.send(workersInfo)
})
app.get('/life', function (req, res) {
    res.send("42")
})
app.get('/details', function (req, res) {
    let param = req.query
    res.send(param)
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})

app.get('/users/:userid', function (req, res) {
    const users = {
        tilda: "You've done a wonderful job",
        riva: "You need to improve your form, but good perseverance",
        jeremy: "You're incredible"
    }
    const userid = req.params.userid
    res.send(users[userid])
})


//Parameters 
//Required Parameters
app.get('/user/:userid', function (req, res) {
    const workersInfo = {
        1: { name: "Elena", email: "ElenaSpiederman@gmail.com" },
        2: { name: "Lian", email: "LianLatino@outlook.com" },
        3: { name: "Mariana", email: "MarianaJapanese@hotmail.com" }
    }
    const userid = req.params.userid
    if (userid == "all") {
        res.send(workersInfo)
    } else {
        res.send(workersInfo[userid])
    }
})

app.listen(port, function () {
    console.log(`Server is runing ${port}`)
})
