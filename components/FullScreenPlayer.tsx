"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface Props {
  onClose: () => void;
}

export default function FullScreenPlayer({ onClose }: Props) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 5,
      url: "https://youtube.com/shorts/tEBs9vequAw",
      caption: "Let me Introduce you to Doris 🥰",
    },
    
    {
      id: 2,
      url: "https://youtube.com/shorts/PmuUoPdbkDE?si=xJWr8XYZv_GoB71r",
      caption: "She is soooooo Beautiful 💕",
    },
    {
      id: 3,
      url: "https://youtu.be/UVBtj2f5L24",
      caption: "I was looking for You❤️",
    },
    {
      id: 4,
      url: "https://youtube.com/shorts/hudbBgpsVdY",
      caption: "She is my Girl💖",
    },
    {
      id: 1,
      url: "https://youtube.com/shorts/iakyZcD1L9Q?feature=share",
      caption: "Memory Lane 🎶",
    },
    
  ];

  // 🔥 Proper YouTube ID Extractor (handles shorts + watch + youtu.be)
  const getYoutubeId = (url: string) => {
    if (url.includes("shorts/")) {
      return url.split("shorts/")[1].split("?")[0];
    }
    if (url.includes("watch?v=")) {
      return url.split("watch?v=")[1].split("&")[0];
    }
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }
    return "";
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 overflow-y-auto px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Entire Overlay */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-3xl z-50"
      >
        ✖
      </button>

      <h1 className="text-white text-4xl font-bold mb-12">
        Our Special Moments 💖
      </h1>

      {/* VIDEO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => {
          const videoId = getYoutubeId(video.url);

          return (
            <div
              key={video.id}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setActiveVideo(video.url)}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="thumbnail"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes("maxresdefault")) {
                      target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    } else if (target.src.includes("hqdefault")) {
                      target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <div className="text-white text-5xl">▶</div>
                </div>
              </div>

              <p className="text-white mt-4 text-lg text-center">
                {video.caption}
              </p>
            </div>
          );
        })}
      </div>

      {/* CENTER VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Video */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-8 text-white text-3xl z-50"
            >
              ✖
            </button>

            <motion.div
              className="w-[80vw] max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <ReactPlayer
                src={activeVideo}
                playing
                controls
                width="100%"
                height="100%"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
