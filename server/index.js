import express from 'express'
import mysql2 from 'mysql2'

const app =express()
const PORT = 3000

app.get(('/',(req,res, next)=>{
res.send("Hello world!")

}))
app.get('/user/:id', (req, res, next) => {
    res.send('USER')
  })


app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})