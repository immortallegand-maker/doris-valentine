"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

export default function MovieTile({ title, image, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      className="cursor-pointer text-white"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={170}
        className="rounded-lg"
      />
      <p className="mt-3 text-center">{title}</p>
    </motion.div>
  );
}
