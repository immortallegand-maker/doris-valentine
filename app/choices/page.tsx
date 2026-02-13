"use client";

import { useRouter } from "next/navigation";
import FullScreenPlayer from "@/components/FullScreenPlayer";
import MovieTile from "@/components/MovieTile";
import { useState } from "react";

export default function Choices() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center">

      {!selected && (
        <div className="flex gap-16">

          {/* Movie Tile */}
          <MovieTile
            title="Movie Night 💕"
            image="/title.png"
            onClick={() => setSelected("one")}
          />

          {/* Surprise Tile → Redirect */}
          <MovieTile
            title="Photobooth 💘"
            image="/booth.png"
            onClick={() => router.push("/surprise")}
          />

        </div>
      )}

      {selected === "one" && (
        <FullScreenPlayer
          onClose={() => setSelected(null)}
        />

      )}

    </main>
  );
}
