import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
   model: "text-davinci-002",
   prompt: "Create a list of 8 questions for my interview with a science fiction author:",
   temperature: 0.5,
   max_tokens: 64,
   top_p: 1.0,
   frequency_penalty: 0.0,
   presence_penalty: 0.0,
});