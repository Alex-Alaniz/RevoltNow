'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const genesisDrops = [
  {
    id: 'tiger-strike',
    title: 'TIGER STRIKE',
    artwork: '/images/genesis/tiger-strike/artwork.jpg',
    details: [
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
    ]
  },
  {
    id: 'cyber-kitty',
    title: 'CYBER KITTY',
    artwork: '/images/genesis/cyber-kitty/artwork.jpg',
    details: [
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
    ]
  },
  {
    id: 'oni-warrior',
    title: 'ONI WARRIOR',
    artwork: '/images/genesis/oni-warrior/artwork.jpg',
    details: [
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
    ]
  },
  {
    id: 'love-of-money',
    title: 'LOVE OF MONEY',
    artwork: '/images/genesis/love-of-money/artwork.jpg',
    details: [
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
    ]
  }
];

export function GenesisDrops() {
  return (
    <div className="space-y-12">
      {genesisDrops.map((drop, index) => (
        <motion.div
          key={drop.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-8">
            <div className="relative w-[600px] h-[200px]">
              <Image
                src={drop.artwork}
                alt={drop.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 max-w-[280px]">
              <h3 className="text-lg font-light text-[#9A8866] mb-2">{drop.title}</h3>
              <ul className="space-y-0.5 text-xs font-light text-[#9A8866]/80">
                {drop.details.map((detail, i) => (
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
      ))}
    </div>
  );
}