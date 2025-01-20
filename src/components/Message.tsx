import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isBot: boolean;
}

export const Message = ({ content, isBot }: MessageProps) => {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-lg p-4 message-animation",
        isBot
          ? "bg-white shadow-md self-start"
          : "bg-primary text-primary-foreground self-end"
      )}
    >
      <p className="text-sm md:text-base whitespace-pre-wrap">{content}</p>
    </div>
  );
};