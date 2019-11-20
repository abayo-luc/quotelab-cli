const axios = require('axios');
const url = 'https://they-quoted.herokuapp.com/data';
const fetch = term =>
    axios
    .get(`${url}?query=${term}`)
    .then(res => res.data)
    .catch(err => err);
module.exports = fetch;