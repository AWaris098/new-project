const express = require('express')
const app = express()
require('./conn/mongoose.js')
require('./models/user.js')

const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log(`Port listning on up port on ${port}`)
})