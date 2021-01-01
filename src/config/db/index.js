
const mongoose = require('mongoose');
async function connect(params) {
        try {
            await mongoose.connect('mongodb://localhost:27017/dev_blog', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            console.log('connect success');
        } catch (error) {
            console.log('connect false');
        }
}


module.exports = { connect };