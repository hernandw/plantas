const express= require('express')
require('dotenv').config();
const jwt = require('jsonwebtoken');

const router=express.Router();

const  {registrarUsuario, obtenerDatosUsuario, verificarCredenciales}= require('../consultas/consultas')

const {checkCredentialExist, verificacionToken} = require('../middlewares/middlewares')


router.get('/', (req,res)=>{
    res.send('Servidor en express')
})

router.post('/usuarios', checkCredentialExist, async (req, res)=>{
    try {
        const usuario=req.body
        console.log('usuario es: ', usuario)
        await registrarUsuario(usuario)
        res.send("Usuario creado con exito")
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.get("/usuarios", verificacionToken, async(req,res)=>{
     try {
         const token= req.header("Authorization").split("Bearer ")[1];
         const { email }=jwt.decode(token)
         const usuario= await obtenerDatosUsuario(email)
         res.json(usuario)
     } catch (error) {
         res.status(500).send(error.message)
     }
})

router.post('/login', async(req, res)=>{
     try {
         const {email, password}= req.body
         await verificarCredenciales(email, password)
         const token=jwt.sign({email}, process.env.SECRET)
         res.send(token)
     } catch (error) {
         res.status(500).send(error.message)
     }
 })


module.exports= router;