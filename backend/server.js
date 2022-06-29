const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//config
dotenv.config({path: "backend/config/config.env"});


// Connection to database
connectDatabase();


app.listen(process.env.PORT, () =>{
    console.log(`Server is Working http://localhost:${process.env.PORT}`);
})