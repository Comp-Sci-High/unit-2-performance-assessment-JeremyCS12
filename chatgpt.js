const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let baseURL = "https://api.openai.com/v1/responses"

async function fetchgpt(inp) {

    let options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4.1",
            input: inp
        })

    }

    const url = `${baseURL}`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.output[0].content[0].text)
}

console.log("CHATGPT")

let plo = prompt("Ask chatgpt something")

fetchgpt(plo)
