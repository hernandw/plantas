const jwt=require('jsonwebtoken')
require('dotenv').config()


const checkCredentialExist= (req, res, next)=>{
    const {nombre, email, direccion, password}=req.body;
    if(!nombre || !email || !direccion || !password){
        res.status(401).send({message:"No se recibieron las credenciales en esta consulta"})
    }
    next()
};

const verificacionToken= (req, res, next)=>{
    const token= req.header("Authorization").split("Bearer ")[1];
    if(!token)
        throw{code:401, message:"Debe incluir el token en las cabeceras (Authorization)"}

    const tokenValido= jwt.verify(token, process.env.SECRET)
    if(!tokenValido)
        throw{code:401, message: "El token es invalido"}
    next()
}



module.exports={
    checkCredentialExist,
    verificacionToken
}