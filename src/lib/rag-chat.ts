import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

export const ragChat = new RAGChat({
  // using upstash model - an openai alternative
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
  redis: redis,
});

// remember, this model expexts an api key
