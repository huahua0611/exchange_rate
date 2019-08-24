"use strict";

const axios = require("axios");

axios
  .get("https://api.exchangeratesapi.io/latest?base=USD")
  .then(function(response) {
    // handle success
    console.log(response.data.rates);
  });
