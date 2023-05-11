const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function startServer() {
  try {
    await new Promise((resolve, reject) => {
      const server = app.listen(3000, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log(`Server is running on port ${server.address().port}`);
          resolve();
        }
      });
    });
  } catch (err) {
    console.error('Error starting server: ', err);
  }
}

app.listen(3001, function() { 
  console.log('Le serveur est en écoute sur le port 3000');
});

async function runCompletion() {
  try {
    await startServer();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "je vous parle d'un temps que les moins de 20 ans",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
  } catch (err) {
    console.error('Error running completion: ', err);
  }
}

runCompletion();
