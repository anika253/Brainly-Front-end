import { ShareIcon } from "./icons/ShareIcon";

interface CardProps {
  link: string;
  type: "youtube" | "twitter";
  title: string;
}

export function Card({ link, type, title }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md max-w-md w-full shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-800">{title}</h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <ShareIcon />
        </a>
      </div>

      <div className="w-full">
        {type === "youtube" && (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-60 rounded"
            ></iframe>
          </div>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet w-full">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
