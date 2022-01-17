const mongoose = require('mongoose');

connect();

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Roman:mkxacsit123@cluster0.q0dgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("server: connection to mongodb success");
    }
    catch(error) {
        console.log("server: cannot connect to mongodb");
    }
}

module.exports = mongoose;