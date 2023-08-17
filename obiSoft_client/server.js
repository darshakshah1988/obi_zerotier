const express = require('express');
const axios = require('axios');
const cors = require("cors");

const app = express();
const port = 3001; // Choose your desired port

const baseUrl = '/api'; // Your base API URL

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Define routes

app.post(baseUrl + '/auth', async (req, res) => {
    const username = "admin";
    const password = "admin@1234";

    
});

app.get(baseUrl + '/status', async (req, res) => {
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:9993/status',
    headers: { 
        'X-ZT1-Auth': 'zu4bubxq6c559xbr4dfvm1ak'
    }
    };

    axios.request(config)
    .then((response) => {
    res.send(response.data);
    })
    .catch((error) => {
    console.log(error);
    });
});

app.get(baseUrl + '/networks', async (req, res) => {
    const axios = require('axios');
    let data = '{}';

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:9993/network',
    headers: { 
        'Content-Type': 'text/plain', 
        'X-ZT1-Auth': 'zu4bubxq6c559xbr4dfvm1ak'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
        const filteredNetworks = response.data.filter(item => item.status === "OK" );
    res.send(filteredNetworks);
    })
    .catch((error) => {
    console.log(error);
    });
});

app.post(baseUrl+"/network", async(req,res) => {
    
    const networkId = req.body.data;
    const axios = require('axios');
    let data = '{}';

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:9993/network/'+networkId,
    headers: { 
        'Content-Type': 'text/plain', 
        'X-ZT1-Auth': 'zu4bubxq6c559xbr4dfvm1ak'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
    res.send(response.data);
    })
    .catch((error) => {
    console.log(error);
    });

});

app.post(baseUrl+"/leave/network",async (req,res) => {
    const axios = require('axios');
    let data = '';
    const networkId = req.body.data;
    let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'http://localhost:9993/network/'+networkId,
    headers: { 
        'X-ZT1-Auth': 'zu4bubxq6c559xbr4dfvm1ak'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
    res.send(response.data);
    })
    .catch((error) => {
    console.log(error);
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
