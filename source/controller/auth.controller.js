//const { response } = require("express");
const user = require("../models/user.model")
const bcrypt = require("bcrypt")
const APIError = require("../utils/errors");
const Response = require("../utils/response");
//const { response } = require("express");

const login = async(req,res) =>{
    console.log(req.body);
    return res.json(req.body)
}

const register = async(req,res) => {
    const{email} = req.body
    const userCheck = await user.findOne({email})

    if (userCheck){
        throw new APIError("mail kullanılmış",401)
        //console.log("mail daha önce kullanılmış")
    }
    req.body.password =await bcrypt.hash(req.body.password,10);
    console.log("hash password: ",req.body.password)

    
        const userSave  = new user(req.body)


        await userSave.save()
         .then((data) => {
            return new Response(data,"kayıt başarılı").created(res)
          })
          .catch((err) =>{
            throw new APIError("kullanıcı kayıt işlemi gerçekleşemedi !",400)
            
          })
    
    


    console.log(req.body);
}

module.exports ={
    login,
    register
}