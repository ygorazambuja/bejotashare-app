const axios = require(axios);

const api = axios.create({
    baseURL: "localhost:3000"
});

module.exports = api;
