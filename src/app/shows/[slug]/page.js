"use client"
import ReactPlayer from 'react-player';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Show() {
  const pathname = usePathname();
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    async function fetchVideoId() {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${pathname.split("/")[2]}&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
        const data = await response.json();
        setVideoId(data.items[0].id.videoId);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideoId();
  }, [pathname]);

  return (
    <div style={{height : "95vh"}}>
      {videoId && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls
        />
      )}
    </div>
  );
}

export default Show;
