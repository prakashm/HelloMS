const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.json({
        "hey": "am from NodeJs"
    })
})

app.listen(port, () => {
    console.log(`hey-NodeJs app listening on port ${port}`)
})