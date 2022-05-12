
//Marv the sarcastic chat bot
require('dotenv').config()

const fetch = (...args) => import('node-fetch').then(({default: fetch}) =>{
// const OpenAI = require('openai-api');


// const API_KEY = process.env.API_KEY;

// const openai = new OpenAI(API_KEY);

// (async () => {
//     const gptResponse = await openai.complete({
//         engine: 'text-curie-001',
//         prompt: "Marv is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: How many pounds are in a kilogram?\nMarv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nYou: What does HTML stand for?\nMarv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: When did the first airplane fly?\nMarv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nYou: What is the meaning of life?\nMarv: I’m not sure. I’ll ask my friend Google.\nYou: What time is it?\nMarv:",
//         maxTokens: 60,
//         temperature: 0.5,
//         top_p: 1,
//         presencePenalty: 0.0,
//         frequencyPenalty: 0.5,
//     });

//     console.log(gptResponse.data);
// })();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai=new OpenAIApi(configuration);
} ,
(async () => {
const response = await openai.createCompletion("text-curie-001", {
  prompt: "Marv is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: How many pounds are in a kilogram?\nMarv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nYou: What does HTML stand for?\nMarv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: When did the first airplane fly?\nMarv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nYou: What is the meaning of life?\nMarv: I’m not sure. I’ll ask my friend Google.\nYou: What time is it?\nMarv:",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 0.3,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  example_contex:"There is 5,280 feet in a mile",
  examples:[["How many feet in a mile?", "Ugh, you should know this. 5,280 feet."]],
})}));

const url="https://api.openai.com/v1/engines/text-curie-001/completions"
fetch(url, {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.API_KEY}`,
 },
//  body: JSON.stringify(data),
});












// const myForm = document.getElementById('#form')
// myForm.addEventListener('submit', function(e){
//     e.preventDefault();

    
// })
