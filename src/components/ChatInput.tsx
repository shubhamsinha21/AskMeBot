"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
// cleaner way to use handleInputChaneg type
// importing type signature of useChat hook and not actual hook
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex flex-1 h-full items-stretch md:flex-col ">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form className="relative rounded-xl" onSubmit={handleSubmit}>
              <Textarea
                minRows={4}
                autoFocus
                placeholder="Enter you query..."
                value={input}
                onChange={handleInputChange}
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base h-16"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
              />
              <Button
                size="sm"
                className="absolute z-10 border border-border bg-zinc-900 right-2 text-white bottom-2"
                type="submit"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
