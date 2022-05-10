const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
//Port
const port = 4000
//Store Data
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
//Get Responses
app.get('/sale/', function (req, res) {
    let bool = req.query
    if (bool.admin) {
        for (let s of store) {
            if (s.inventory >= 10)
                s.price /= 2
        }
        res.send(store)
    } else {
        res.send(store)
    }

})
app.get('/items', function (req, res) {
    res.send(store)

})
app.get('/items/:name', function (req, res) {
    let name = req.params.name
    for (let s of store) {
        if (s.name === name) {
            res.send(s)
        }
    }

})
app.get('/buy', function (req, res) {
    res.send('Here You can buy Thing☺ Just type `/` And the name of the item')

})
app.get('/buy/:name', function (req, res) {
    let name = req.params.name
    for (let s of store) {
        if (s.name === name) {
            if (s.inventory > 0) {
                s.inventory = s.inventory - 1
                res.send(s)
            }
            else
                res.send(`Out Of Stock :/`)
        }
    }
})
app.get('/pricecheck/:name', function (req, res) {
    let name = req.params.name
    let obj = { price: 0 }
    for (let s of store) {
        if (s.name === name) {
            if (s.price === undefined)
                obj.price = null
            else
                obj.price = s.price
            res.send(obj)
        }
    }

})
//App Listening
app.listen(port, function () {
    console.log(`Server is runing ${port} xxx`)
})
