"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  { image: "/1.jpg", caption: "I met you as friend .. my busmate..schoolmate..my Bestfriend 💖" },
  { image: "/2.jpg", caption: "Sending Random Piccss .. and suggesting kasa lag raha😍" },
  { image: "/3.jpg", caption: "We Look Great Together💕" },
  { image: "/4.jpg", caption: "Cute Cyclone ...  💘" },
  { image: "/5.jpg", caption: "Look at her... she lookkk ssoooooooooooooooo beautiful 💖" },
  { image: "/6.jpg", caption: "She can be calm, hot and next moment snap you too ...Careful 😍" },
  { image: "/7.jpg", caption: "Gifts are just my imagination  ... how you will look in that dress and you nail it perfectly 💕" },
  { image: "/8.jpg", caption: "she gets numb ... she will scold me ...now look at this cyclone in Real life💘" },
  { image: "/9.jpg", caption: "You & Me Always 💘" },
  { image: "/10.jpg", caption: "This Trip/Visit...made me realize how much badly I wanted to hug you .. kiss you 💘" },
  { image: "/11.jpg", caption: "Sneak Dates ... Perfect..Food..Our Space..You Me ..and Lotss of Wild fantasies to real 💘" },
  { image: "/12.jpg", caption: "It always soo hard when we meet and I fight urgue to kiss you 💘" },
  { image: "/13.jpeg", caption: "This was the one the best idea made real... we look soo cute and happy💘" },
  { image: "/14.jpeg", caption: "Need more of trips..dates ..Need more of you and me 💘" },
  { image: "/15.jpeg", caption: "So many memories made .. so many more to come 💘" },
];

export default function Surprise() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // restore original size
    } else {
      setActiveIndex(index); // enlarge clicked one
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-10 py-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">
          Our Love Story 💖
        </h1>

        <button
          onClick={() => router.back()}
          className="text-lg bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Back
        </button>
      </div>

      {/* Album Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {photos.map((photo, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              layout
              onClick={() => handleClick(index)}
              className="relative cursor-pointer"
              animate={{
                scale: isActive ? 1.7 : 1,
                zIndex: isActive ? 20 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative w-[170px] aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={photo.image}
                  alt="memory"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption only when enlarged */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 rounded-b-2xl"
                >
                  <p className="text-sm text-center">
                    {photo.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

    </main>
  );
}
