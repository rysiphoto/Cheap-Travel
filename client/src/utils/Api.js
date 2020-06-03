const axios = require("axios");

const getFlight = (depCity, arrCity) => {
axios({
  "method": "GET",
  "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${depCity}/${arrCity}/2020-09-01`,
  "headers": {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "b4da87e9bemshcb05c75d96011d5p12c4b0jsneb903286953d",
    "useQueryString": true
  }, "params": {
    "inboundpartialdate": "2020-12-01"
  }
})
  .then((response) => {
    // console.log(response.data.Quotes[0].MinPrice)
    console.log(response.data)
    // console.log(response[1].properties)
  })
  .catch((error) => {
    console.log(error)
  })

}

export default getFlight;

