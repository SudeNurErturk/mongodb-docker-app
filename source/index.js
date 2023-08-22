require("express-async-errors")
const express =require("express")
const app = express()
const PORT = process.env.DB_PORT || 5001;
require("dotenv").config()
require("./db/dbConnection")



const router = require("./routers")
const errorHandlerMiddleware = require("./middlewares/errorHandler")


// Middleware
app.use(express.json())
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit : "50mb",extended: true,parameterLimit: "50000"}))

app.use("/api",router)
app.get("/",(req,res) =>{
    res.json({
        message: "hoş geldiniz"
    })
})


// hata yakalama
app.use(errorHandlerMiddleware)
//const hostname = '0.0.0.0'; // Tüm IP adresleri üzerinden dinlemek için




/*
app.listen(PORT,hostname,() => {
    console.log(`Sunucu ${hostname}:${PORT} adresinden dinleniyor.`);
  
  });*/
  const server = app.listen(PORT, () => {
    //çconst host = server.address().address;
    console.log(`Server is running at ${PORT}`);
  });