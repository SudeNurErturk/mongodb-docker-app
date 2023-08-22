const mongoose = require("mongoose")
/*
    mongoose.connect(process.env.DB_URL ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })*/
    const url = "mongodb://mongodb:27017/nodejs-starter-project"
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Veritabanına Başarıyla Bağlandı");
        })
        .catch((err) => {
            console.log("Veritabanına bağlanırken hata çıktı : ", err);
        })
