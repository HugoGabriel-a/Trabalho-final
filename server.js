const express= require ('express')
const app= express()
const userRoutes = require('./routes/userRoutes')
const admRoutes = require('./routes/admRoutes')
app.get('/', (req,res)=>{
    res.send("servidor rodando")
})

app.use('/users', userRoutes)
app.use('/adm', admRoutes)

app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})

