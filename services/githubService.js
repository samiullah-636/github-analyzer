const axios = require('axios');

const getUserData = async (username) => {
    try{
        const Userres=await axios.get(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);

        return{
            user: Userres.data,
            repos: repoRes.data
        };
    }catch (error) {
    throw new Error("User not found or API error");
  }
};

module.exports ={getUserData};