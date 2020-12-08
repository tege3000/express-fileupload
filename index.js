const express = require("express")
const upload = require('express-fileupload')

const app = express()

app.use(upload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if(req.files) {
        console.log(req.files)
    }
})

app.listen(3000)