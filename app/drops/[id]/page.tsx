'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const drops = {
  'tiger-strike': {
    title: 'TIGER STRIKE',
    description: `The essence of TIGER STRIKE draws from the fierce spirit of late 80s and early 90s arcade fighters, where raw energy and unstoppable force collide. This looping animated masterpiece captures the soul of a tiger, portrayed in a highly stylized vision, combining hand-drawn artistry with digital finesse. Each frame reflects the meticulous journey from pencil sketch to bold vector, exploding with vibrant color and dynamic movement.

At the heart of this piece lies the tiger's rhythmic breath, resonating with deep growls that grow more powerful over time. With every exhale, faint sparks of lightning flicker across its stripes, signaling the rising storm within. The mystical first dimly gradually glows, glowing with a primal intensity that hints as the full force waiting to be unleashed. As the sparks dance, the light within him swells, turning his presence from a subtle glow into an overwhelming surge of energy.

The animation culminates in a mesmerizing crescendo, a dazzling explosion of radiant white light that fills the screen, momentarily eclipsing all, before the cycle begins anew. Just as the tiger never ceases to breathe, the energy never truly fadesbut loops endlessly, symbolizing the unstoppable nature of raw potential and growth.

TIGER STRIKE pays homage to the legendary fighters of Street Fighter, Tekken, and Mortal Kombat where each character possesses signature finishing moves, a final burst of brilliance that defines them and conquers their opponent.`,
    image: '/tiger-strike-full.jpg',
    details: [
      'SUPPLY ONLY',
      'FULLY ANIMATED LOOPING VIDEO',
      'Complete single collectible packaged specific to each',
      'NFT to be airdrop',
      'Signed 1 of 1 full size print',
      'Unique Owners video card',
      'Revert series art pieces',
      'Free airdropped NFTs from GENERATIVE collection',
      'Released for every perfect set owned',
      'Deposit rights access. Maximum 125 members only'
    ]
  },
  // Add other drops here
};

export default function DropPage() {
  const params = useParams();
  const drop = drops[params.id as keyof typeof drops];

  if (!drop) return null;

  return (
    <div className="min-h-screen bg-black text-[#9A8866]">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/revolt-logo.png"
            alt="REVOLT"
            width={180}
            height={90}
            priority
          />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">{drop.title}</h1>
            <div className="prose prose-invert prose-gold">
              {drop.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[#9A8866] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button 
              className="w-full bg-[#9A8866] text-black hover:bg-[#9A8866]/90"
            >
              ACQUIRE NOW
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={drop.image}
                alt={drop.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <ul className="space-y-2">
              {drop.details.map((detail, i) => (
                <li key={i} className="text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}