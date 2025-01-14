console.log("Hello, world!");

import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
  model: "mario",
  temperature: 1,
  maxRetries: 2,
});

const aiMsg = await llm.invoke([
  ["system", "Translate English to Dutch."],
  ["human", "Hi, I'm a man."],
]);
aiMsg;

console.log(aiMsg.content);
