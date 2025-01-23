import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
  model: "mario",
  temperature: 1,
  maxRetries: 2,
  format: "json",
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant that translates {input_language} to {output_language}",
  ],
  ["human", "{input}"],
]);

const chain = prompt.pipe(llm);

const output = await chain.invoke({
  input_language: "English",
  output_language: "Dutch",
  input: "I love programming.",
});

console.log(output.content);
