// App.tsx
import { useEffect } from "react";
import { Card } from "./components/Card";
import { Sidebar } from "./components/Sidebar";

function App() {
  /* load the twitter widget once */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      {/* 18 rem sidebar  +  1 rem gap  =>  ml-[19rem]  */}
      <main className="ml-[19rem] p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="First Tweet"
            type="twitter"
            link="https://twitter.com/kirat_tw/status/1633685473821425666"
          />
          <Card
            title="First YouTube Video"
            type="youtube"
            link="https://www.youtube.com/watch?v=9bZkp7q19f0"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
