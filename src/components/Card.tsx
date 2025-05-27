import { useEffect } from "react";
import { ShareIcon } from "./icons/ShareIcon";

interface CardProps {
  link: string;
  type: "youtube" | "twitter";
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

export function Card({ link, type }: CardProps) {
  useEffect(() => {
    if (type === "twitter") {
      const scriptId = "twitter-wjs";
      const existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => {
          window.twttr?.widgets.load();
        };
        document.body.appendChild(script);
      } else {
        window.twttr?.widgets.load();
      }
    }
  }, [type, link]);

  return (
    <div>
      <div className="p-8 bg-white rounded-md border-gray-200 max-w-72 border">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-4">
              <ShareIcon />
            </div>
            Project Ideas
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
