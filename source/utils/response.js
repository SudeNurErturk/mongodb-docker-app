class Response {
    constructor(data = null, message = null){
        this.data = data;
        this.message= message
        
    }
    succes(response){
        return response.status(200).json({
            succes: true,
            data : this.data,
            message : this.message ?? "işlem başarılı"
        })
    }

    created(response){
        return response.status(201).json({
            succes: true,
            data : this.data,
            message : this.message ?? "işlem başarılı"
        })
    }
    
    error500(response){
        return response.status(500).json({
            succes: false,
            data : this.data,
            message : this.message ?? "işlem başarısız !"
        })
    }

    error400(response){
        return response.status(400).json({
            succes: false,
            data : this.data,
            message : this.message ?? "işlem başarısız !"
        })
    }


    error401(response){
        return response.status(401).json({
            succes: false,
            data : this.data,
            message : this.message ?? "lütfen oturum açın !"
        })
    }


    error404(response){
        return response.status(404).json({
            succes: false,
            data : this.data,
            message : this.message ?? "işlem başarısız"
        })
    }

    error429(response){
        return response.status(429).json({
            succes: false,
            data : this.data,
            message : this.message ?? "çok fazla istek oluştu !"
        })
    }







}

module.exports = Response