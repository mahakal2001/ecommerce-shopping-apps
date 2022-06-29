const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


// Handling Uncaugth Exception
// mane ulta palta console.log likha error
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaugth Rejection`);
    process.exit(1);

});

//config
dotenv.config({path: "backend/config/config.env"});


// Connection to database
connectDatabase();


const server = app.listen(process.env.PORT, () =>{
    console.log(`Server is Working http://localhost:${process.env.PORT}`);
});


// Unhandled Promise Rejection

process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() =>{
        process.exit(1);
    });
});