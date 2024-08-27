"use client";
import { useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";

// by default in next js , it is a server side componenys

export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
  const { messages, handleInputChange, input, handleSubmit, setInput } =
    useChat({
      // it takes 2 things
      // info for how vercel ai sdk gets messages for chat
      api: "/api/chat-stream",
      body: {
        sessionId,
      },
    });
  return (
    <div
      className="relative min-h-full bg-zinc-900 flex divide-y
    divide-zinc-700 flex-col justify-between gap-2"
    >
      <div
        className="flex-1 text-white bg-zinc-800 flex 
      justify-between flex-col"
      >
        <Messages messages={messages} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};
