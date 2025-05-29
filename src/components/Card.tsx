// components/Card.tsx
import { ShareIcon } from "./icons/ShareIcon";

interface CardProps {
  link: string;
  type: "youtube" | "twitter";
  title: string;
}

export function Card({ link, type, title }: CardProps) {
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
