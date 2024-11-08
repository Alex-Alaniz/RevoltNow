'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const variants = [
  '/images/generative/tigers/tiger-variant-1.png',
  '/images/generative/tigers/tiger-variant-2.png',
  '/images/generative/tigers/tiger-variant-3.png',
  '/images/generative/tigers/tiger-variant-4.png',
  '/images/generative/tigers/tiger-variant-5.png',
];

const details = [
  '-10 SUPPLY ONLY',
  '-FULLY ANIMATED LOOPING VIDEO',
  '-Claimable tangible collectibles packaged specific to each',
  'NFT in the series.',
  '-Signed 14x14 foil print',
  '-Infinite Objects video print',
  '-Stand alone art plaque',
  '-2 free airdropped NFTs from GENERATIVE collection.',
  '-Whitelist for every project we create',
  '-Discord Alpha access, Maximum 100 members only.'
];

export function GenerativeDrops() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-8">
          <div className="relative w-[600px] h-[200px]">
            <Image
              src="/images/generative/tigers/artwork.jpg"
              alt="TIGERS"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 max-w-[280px]">
            <h3 className="text-lg font-light text-[#9A8866] mb-2">TIGERS</h3>
            <ul className="space-y-0.5 text-xs font-light text-[#9A8866]/80">
              {details.map((detail, i) => (
                <li 
                  key={i}
                  className="leading-tight"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <Separator className="bg-[#9A8866]/20" />

      <div className="grid grid-cols-5 gap-4">
        {variants.map((variant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={variant}
              alt={`Tiger Variant ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      <Separator className="bg-[#9A8866]/20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end items-center"
      >
        <Image
          src="/images/footer-logo.png"
          alt="Footer Logo"
          width={160}
          height={60}
          className="object-contain text-[#9A8866]"
          style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(14%) saturate(654%) hue-rotate(6deg) brightness(91%) contrast(87%)' }}
        />
      </motion.div>
    </div>
  );
}