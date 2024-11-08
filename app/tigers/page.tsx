import { DropLayout } from '@/components/drop-layout';

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

export default function TigersPage() {
  return (
    <DropLayout
      title="TIGERS"
      titleImage="/images/tigers-title.png"
      video="/videos/tigers.mp4"
      description={`The TIGERS generative collection represents a groundbreaking fusion of traditional artistry and algorithmic innovation. Each piece in this series is uniquely generated, combining hand-crafted elements with procedural variations to create truly one-of-a-kind digital masterpieces.`}
    />
  );
} 