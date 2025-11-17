const express= require ('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('lista de administradores')
})

module.exports= router