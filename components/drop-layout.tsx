'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DropHeader } from '@/components/drop-header';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface DropLayoutProps {
  title: string;
  description: string;
  titleImage: string;
  video: string;
}

export function DropLayout({ title, titleImage, video, description }: DropLayoutProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Ensure video is muted on initial load
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <DropHeader />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-block mb-8 text-[#9A8866] hover:text-[#9A8866]/80 transition-colors"
        >
          ← Back to Gallery
        </Link>

        <div className="space-y-8">
          {/* First Separator - Above title */}
          <div className="w-full">
            <Separator className="bg-[#9A8866]/40 h-[3px]" />
          </div>

          {/* Header Section with Title and Acquire Button */}
          <div className="flex justify-between items-start">
            {/* Title Image */}
            <div className="relative w-[400px] h-[80px]">
              <Image
                src={titleImage}
                alt={title}
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Acquire Now Button */}
            <div className="relative w-[200px] h-[40px]">
              <Image
                src="/images/acquire-now-button.png"
                alt="Acquire Now"
                fill
                className="object-contain hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#9A8866]/80 leading-relaxed text-sm whitespace-pre-wrap max-w-[800px]">
              {description}
            </div>
          </div>

          {/* Second Separator - Above video */}
          <div className="w-full">
            <Separator className="bg-[#9A8866]/40 h-[3px]" />
          </div>

          {/* Video Loop with Audio Controls */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[16/9] w-full"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </motion.div>
            
            {/* Audio Control Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Third Separator - Below video */}
          <div className="w-full">
            <Separator className="bg-[#9A8866]/40 h-[3px]" />
          </div>
        </div>

        {/* Footer Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end items-center mt-12"
        >
          <Image
            src="/images/footer-logo.png"
            alt="Footer Logo"
            width={240}
            height={90}
            className="object-contain text-[#9A8866] md:w-[320px] md:h-[120px]"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(57%) sepia(14%) saturate(654%) hue-rotate(6deg) brightness(91%) contrast(87%)' 
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
