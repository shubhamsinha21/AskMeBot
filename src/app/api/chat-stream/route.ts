// we want to export http request
//  we use POST method - this is how it works in Next Js

import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  // we access to post req body
  const { messages, sessionId } = await req.json();
  // we care about last messages
  const lastMessage = messages[messages.length - 1].content;
  //   providing response
  const response = await ragChat.chat(lastMessage, {
    streaming: true,
    sessionId,
  });

  //   transferring data to frondend
  return aiUseChatAdapter(response);
};
