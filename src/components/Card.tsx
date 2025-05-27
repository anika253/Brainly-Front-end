import { ShareIcon } from "./icons/ShareIcon";
export function Card() {
  return (
    <div>
      <div
        className="p-8 bg-white rounded-md  
     border-gray-200
      
     max-w-72
      border "
      >
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
        <iframe
          className="w-full"
          src="https://www.youtube.com/embed/UvMccBUNKfg?si=eC5E0Cpf0T86ucPx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <blockquote className="twitter-tweet">
          <a href="https://t.co/Vuvl5siEB3"></a> Cristiano Ronaldo (@Cristiano){" "}
          <a href="https://twitter.com/Cristiano/status/1927101078979375440?ref_src=twsrc%5Etfw"></a>
        </blockquote>{" "}
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </div>
  );
}
