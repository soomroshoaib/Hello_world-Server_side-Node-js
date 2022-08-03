import express from "express"
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send(" Soomro World 123444 ")
});

app.listen(port, ()=>{
    console.log(`Expample app listing on port ${port}`)
})