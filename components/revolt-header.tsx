import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function RevoltHeader() {
  return (
    <header className="relative bg-black w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-4 md:py-0">
        {/* Left side - Logo */}
        <div className="relative w-[200px] md:w-[300px] mx-auto md:mx-0">
          <Image
            src="/images/revolt-logo.png"
            alt="REVOLT"
            width={300}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Right side - Banner Image */}
        <div className="w-full md:flex-1 relative h-[150px] md:h-[200px] overflow-hidden">
          <Image
            src="/images/tiger-banner.jpg"
            alt="Tiger Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="w-full md:max-w-[880px] mx-auto mt-8">
        <Separator className="bg-[#9A8866]/40 h-[3px]" />
      </div>

      {/* Title section */}
      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-xl tracking-wider text-[#9A8866] mb-4">
          DISRUPT, INNOVATE & REVOLT
        </h2>
        <p className="text-[#9A8866] leading-relaxed text-sm">
          REVOLT stands as a testament to my relentless pursuit of artistic autonomy and defiance of conventional norms. This collection is not just a creative expression but a rebellion against the traditional structures that govern both art and economics. With NFT and cryptocurrency representing the future of decentralization, my work mirrors that rejection of conformity, embracing innovation in technique, concept, and execution. It is a challenge to the prevailing narrative, an invitation to rethink, rebuild, and rise against the expected.
        </p>
      </div>
    </header>
  );
}