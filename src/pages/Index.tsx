import { Message } from "@/components/Message";
import { ChatInput } from "@/components/ChatInput";
import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  content: string;
  isBot: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Welcome to L'Imprévu! How can I assist you with your reservation today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { content: message, isBot: false }]);
    setIsLoading(true);

    // TODO: Integrate with your agent
    // For now, we'll simulate a response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: "I'll help you with your reservation. Could you please provide the number of guests and your preferred date and time?",
          isBot: true,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <h1 className="text-2xl font-semibold text-center">L'Imprévu Reservations</h1>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col p-4">
        <div className="flex-1 overflow-y-auto messages-container space-y-4 pb-4">
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </main>
    </div>
  );
};

export default Index;