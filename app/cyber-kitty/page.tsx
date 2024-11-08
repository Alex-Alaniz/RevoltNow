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

export default function CyberKittyPage() {
  return (
    <DropLayout
      title="CYBER KITTY"
      titleImage="/images/cyber-kitty-title.png"
      video="/videos/cyber-kitty.mp4"
      description={`The second Genesis Drop,Cyber Kitty, channels the dark, electric pulse of Akira, fused with the dystopian vibes of The Matrix and the monstrous power of Godzilla. This animated NFT is a vision of an era where technology teeters on the edge of control, embodied in a vicious, dragon-like feline creature of both myth and machine, poised in a post-apocalyptic glow.
Crafted through a meticulous artistic journey,Cyber Kitty began as a raw pencil sketch, evolved into a bold vector illustration, and transformed through vivid colors and animation. This design draws on traditional Japanese influences, merging the fierce grace of a tiger with the intensity of a guardian beast, like a Foo Dog or dragon, all in my own distinct, stylized approach.
As the countdown ticks from ten to zero, Cyber Kitty gathers strength with each passing second. His form vibrates with the hum of latent power, building until the final moment when his eyes flare with an intense glow, and streams of laser light shoot forth, cutting through the digital night like a warning shot across a neon cityscape. It’s a spectacle of power, encapsulated in the silent intensity of his gaze and the controlled violence of his laser strike.
The looping animation symbolizes the relentless pace of technological advance, hinting at a future dominated by the machinery it once served. Cyber Kitty is a statement on postmodern decline into technocracy, a nod to the aesthetic and moral ambiguity of cyberpunk. This NFT is more than an image; it’s a visual manifesto, a fusion of tradition and technology, captured in one pulsing, defiant moment.`}
    />
  );
}