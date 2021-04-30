const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json()); //reads request post data

// This takes in a langauge query parameter
// An example request is localhost:8080/translateNews?language=es
app.post('/translateNews', function (postmanReq, postmanRes) {

    // Log the query parameters
    console.log(postmanReq.query) 
    let language = postmanReq.query.language;

   console.log(postmanReq.body)

    //Make a post request with the name query parameter
    axios.post('https://codubee-projects-api.herokuapp.com/translate/translateNews?language='+ language, postmanReq.body)
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data); //printing terminal
        postmanRes.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        postmanRes.status(400).json({error:"An error occurred"});
    })
})

app.listen(8080, () => console.log(`Example app listening at localhost:8080`))