const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>
{
    res.send("API working fine");
});

app.listen(port,()=>
{
    console.log("server is listening on port "+port);
});
