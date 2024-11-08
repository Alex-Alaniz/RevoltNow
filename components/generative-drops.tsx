'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

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
    <div className="space-y-8 md:space-y-12">
      <Link href="/tigers" className="block hover:opacity-90 transition-opacity">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="relative w-full md:w-[600px] h-[150px] md:h-[200px]">
              <Image
                src="/images/generative/tigers/artwork.jpg"
                alt="TIGERS"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full md:flex-1 md:max-w-[280px] px-4 md:px-0">
              <h3 className="text-lg font-light text-[#9A8866] mb-2 text-center md:text-left">TIGERS</h3>
              <ul className="space-y-0.5 text-xs font-light text-[#9A8866]/80">
                {details.map((detail, i) => (
                  <li 
                    key={i}
                    className="leading-tight text-center md:text-left"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Link>

      <div className="w-full md:max-w-[880px]">
        <Separator className="bg-[#9A8866]/20" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 px-4 md:px-0">
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

      <div className="w-full md:max-w-[880px]">
        <Separator className="bg-[#9A8866]/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center md:justify-end items-center px-4 md:px-0"
      >
        <Image
          src="/images/footer-logo.png"
          alt="Footer Logo"
          width={120}
          height={45}
          className="object-contain text-[#9A8866] md:w-[160px] md:h-[60px]"
          style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(14%) saturate(654%) hue-rotate(6deg) brightness(91%) contrast(87%)' }}
        />
      </motion.div>
    </div>
  );
}