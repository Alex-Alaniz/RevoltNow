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

export default function LoveOfMoneyPage() {
  return (
    <DropLayout
      title="LOVE OF MONEY"
      titleImage="/images/love-of-money-title.png"
      video="/videos/love-of-money.mp4"
      description={`The fourth and final Genesis Drop, LOVE OF MONEY, delves into the dark allure of wealth and the void it leaves behind. This NFT is a haunting tableau, juxtaposing the intricate beauty of 1800s banknote engravings with a central symbol of decay: a skull intricately etched into ornate filigree, symbolizing the emptiness left in the relentless chase for riches. In this artwork, wealth is both seductive and sinister, with every detail a reminder of the cost of hollow ambitions.
Crafted with the precision of antique banknote engravings, LOVE OF MONEY took shape through layers of hand-sketched lines, bold vector designs, and careful digital refinement, transforming historical artistry into a timeless statement. Each swirl of filigree pulls the viewer into its elegance while simultaneously spiraling toward the emptiness at its heart. The skull, staring back with glowing eyes, reflects a life drained of meaning, an existence once vibrant but hollowed out by the pursuit of more.
The looping animation underscores the cyclical trap of wealth, each turn a reminder of how greed repeats itself through history, consuming joy and replacing it with a deathly silence. It is a silent warning and an exploration of how the pursuit of wealth can lead to a life devoid of true fulfillment.
LOVE OF MONEY stands as the final cornerstone of my Genesis collection, a profound meditation on value, ambition, and the soul’s yearning for more than material gain. This NFT transcends traditional artwork, becoming a timeless reflection on fortune, loss, and the bittersweet ache that lies at the heart of human desire.`}
    />
  );
} 