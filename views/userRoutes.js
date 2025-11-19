const express= require ('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('lista de usuarios')
})



module.exports= router