import express from 'express';
const app = express();

app.use(express.static('./static'));

app.listen(3030,()=>{
    console.log("listening 3030");
})