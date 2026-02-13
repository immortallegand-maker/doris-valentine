"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Valentine() {
  const router = useRouter();

  const reactions = [
    {
      message: "Are you sure? 😢",
      image: "/opt1.png",
    },
    {
      message: "Think again... 🥺",
      image: "/opt2.png",
    },
    {
      message: "I’ll be very sad 💔",
      image: "/opt3.png",
    },
    {
      message: "Now where you will run?",
      image: "/opt4.png",
    },
  ];

  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    if (noCount < reactions.length) {
      setNoCount(noCount + 1);
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-8 px-4">

      {/* Title */}
      <h1 className="text-4xl text-center">
        Will you be my Valentine Doriss? 💖
      </h1>

      {/* Buttons */}
      <div className="flex gap-6 items-center justify-center relative">

        {/* YES Button */}
        <button
          onClick={() => router.push("/choices")}
          style={{
            transform: `scale(${1 + noCount * 0.7})`,
          }}
          className="px-6 py-3 bg-red-600 rounded-lg transition-all duration-300 z-10"
        >
          Yes 😍
        </button>

        {/* NO Button */}
        <button
          onClick={handleNoClick}
          className="px-6 py-3 bg-zinc-700 rounded-lg transition-all duration-300"
        >
          No 😈
        </button>

      </div>

      {/* Reaction Section BELOW buttons */}
      {noCount > 0 && noCount <= reactions.length && (
        <div className="flex flex-col items-center gap-4 mt-20 transition-all duration-300">

          

          {/* Fixed size image container */}
          <div className="w-[220px] h-[220px] relative">
            <Image
              src={reactions[noCount - 1].image}
              alt="reaction"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        <p className="text-lg text-red-400 text-center">
            {reactions[noCount - 1].message}
          </p>
        </div>
      )}

    </main>
  );
}
