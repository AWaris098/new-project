const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/new-project-api', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('Connection succesfully connect with database')
}).catch((err) => {
    console.log(err)
})