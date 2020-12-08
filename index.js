const express = require("express")
const upload = require('express-fileupload')

const app = express()

app.use(upload())
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if(req.files) {
        const file = req.files.file
        const filename = file.name

        file.mv(`./uploads/${filename}`, function(err) {
            if(err) {
                res.send(err)
            }
            else {
                res.send("File Uploaded")
            }
        })
    }
})

app.listen(3000)
console.log("Server started on port 3000")