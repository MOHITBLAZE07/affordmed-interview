const express = require('express')
const axios = require('axios');
const app = express()
const port = 3001


app.get('/numbers', (req, res) => {
    console.log("hello")
    var url = req.query.url; // $_GET["id"]
    console.log(url[0])

    const ans = new Set()

    for(let i = 0; i<url.length; i++ ){
        // Make a request for a user with a given ID
        axios.get('/${url[i]}')
        .then(function (response) {
        // handle success
        console.log(response.data);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
            
        }
        res.send("help")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})