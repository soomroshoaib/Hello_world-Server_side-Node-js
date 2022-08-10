import express from "express"
import cors from "cors"


const app = express();
app.use(cors())


app.get('/Porfile',(req, res)=>{
    res.send(" Soomro World 123444 soomro 123456789 bjakakka ")
});

app.get('/information',(req, res)=>{
    res.send({
         Name: "Shoaib Soomro",
         City:  "Karachi",
         Distric: "Rahimyar Khan"
    })
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Expample app listing on port ${port}`)
})