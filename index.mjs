import express from "express"
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send(" Soomro World 123444 soomro 123456789 ")
});

app.listen(port, ()=>{
    console.log(`Expample app listing on port ${port}`)
})