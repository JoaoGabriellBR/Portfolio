"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type VideoMockupProps = {
  src: string;
  type?: string;
  autoPlay?: boolean;
  loop?: boolean;
  initialMuted?: boolean;
};

const VideoMockup: React.FC<VideoMockupProps> = ({
  src,
  type = "video/mp4",
  autoPlay = true,
  loop = true,
  initialMuted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(initialMuted);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
      >
        <source src={src} type={type} />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 left-8 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={40} /> : <Volume2 size={40} />}
      </button>
    </>
  );
};

export default VideoMockup;
