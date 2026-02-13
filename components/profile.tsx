"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  onClick: () => void;
}

export default function ProfileTile({ name, image, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      className="cursor-pointer text-center"
    >
    
      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        className="rounded-md"
      />
      <p className="mt-3 text-lg">{name}</p>
    </motion.div>
    
  );
}
