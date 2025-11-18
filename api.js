const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

let baseURL = "http://api.weatherapi.com/v1/forecast.json"

async function fetchweather(location, days){
let options = {
method: "GET"
}


    const url = `${baseURL}?key=${apiKey}&q=${location}`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log("City:" + data.location.name)
    console.log("")
    console.log("Time:" + data.location.localtime)
    console.log("")
    console.log("TEMPERATURE")
    console.log("")
    console.log("Celcius:" + data.current.temp_c)
    console.log("")
    console.log("Farenheit:" + data.current.temp_f)
    console.log("")
    console.log("Feels like celcius:" + data.current.feelslike_c)
    console.log("")
    console.log("Feels like farenheit:" + data.current.feelslike_f)
}
console.log("Weather app lil bro")

let plo = prompt("Enter a city ")

fetchweather(plo)