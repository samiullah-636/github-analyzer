const express = require('express');
const {getUserData} = require('./services/githubService');
const app = express();
const port = 3000;

app.get('/', (req,res)=>
{
    res.send("API working fine");
});

app.get('/user/:username', async(req,res)=>
{
try{
    const {username} = req.params;
const result = await getUserData(username);
 res.json(result);
}
catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.listen(port,()=>
{
    console.log("server is listening on port "+port);
});
