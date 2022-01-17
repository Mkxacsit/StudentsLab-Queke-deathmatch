let result = require('dotenv').config();

if (result.error) {
    console.log("server: error occured while reading .env data ");
    console.log(result.error);
  }
  
console.log(result.parsed)


module.exports = config = {
    DBConnection : {
        user : process.env.DB_USER || "root",
        pass : process.env.DB_PASS || "1111",
        host : process.env.DB_HOST || "localhost",
        port : process.env.DB_PORT || "3307",
        name : process.env.DB_NAME || "quake_db"
    },
    secret: process.env.DB_SECRET || "secret",
    
    dateFormat : 'DD/MM/YYYY HH:mm:ss'
}

/*
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_NAME=quake_db
DB_SECRET=secret
 */