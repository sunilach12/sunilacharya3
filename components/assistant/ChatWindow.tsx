"use client";
import TypingIndicator from "./TypingIndicator";
import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import VoiceInput from "./VoiceInput";
import ChatBubble from "./ChatBubble";
import SuggestedQuestions from "./SuggestedQuestions";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello 👋 I'm Sunil's AI Assistant.",
    },
    {
      role: "assistant",
      content:
        "Ask me anything about Sunil's skills, projects, certificates or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (question?: string) => {
    const text = (question ?? input).trim();

    if (!text || loading) return;

    const newMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (question: string) => {
    sendMessage(question);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-96 overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-2xl">

      {/* Header */}

      <div className="bg-cyan-500 p-4">

        <h2 className="text-lg font-bold text-black">
          🤖 Sunil AI Assistant
        </h2>

      </div>

      {/* Suggested Questions */}

      {messages.length === 2 && (
        <div className="border-b border-cyan-500/20 bg-slate-800 p-4">
          <SuggestedQuestions
            onSelect={handleSuggestion}
          />
        </div>
      )}

      {/* Messages */}

      <div
        ref={scrollRef}
        className="h-96 space-y-4 overflow-y-auto p-4"
      >
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            bot={message.role === "assistant"}
            text={message.content}
          />
        ))}

        {loading && <TypingIndicator />}
      </div>

      {/* Input */}

     <div className="flex items-center gap-2 border-t border-cyan-500/20 p-4">

  <input
    value={input}
    onChange={(e) =>
      setInput(e.target.value)
    }
    onKeyDown={handleKeyDown}
    placeholder="Ask something..."
    disabled={loading}
    className="w-full rounded-xl bg-slate-800 px-4 py-3 outline-none"
  />

  <VoiceInput
    onResult={(text) => {
      setInput(text);
    }}
  />

  <button
    onClick={() => sendMessage()}
    className="rounded-xl bg-cyan-500 p-3 text-black"
  >
    <Send size={18} />
  </button>

</div>

    </div>
  );
}