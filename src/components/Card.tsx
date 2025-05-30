// components/Card.tsx
import { ShareIcon } from "./icons/ShareIcon";
import { useEffect } from "react";

interface CardProps {
  link: string;
  type: "youtube" | "twitter";
  title: string;
}

export function Card({ link, type, title }: CardProps) {
  // Add this effect to handle messages from iframe
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      // Add origin checks for security
      if (event.origin.includes("youtube.com")) {
        // You can optionally respond to the message here
        // event.source.postMessage('response', event.origin);
      }
    };

    window.addEventListener("message", messageHandler);
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <article className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow">
      <header className="p-4 flex justify-between items-center border-b">
        <h3 className="font-medium text-gray-900 truncate">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ShareIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </a>
      </header>

      <div className="p-4">
        {type === "youtube" && (
          <div className="aspect-video">
            <iframe
              src={link.replace("watch?v=", "embed/")}
              className="w-full h-full rounded"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // Add sandbox for security
              sandbox="allow-same-origin allow-scripts allow-popups"
            />
          </div>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet w-full">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </article>
  );
}
