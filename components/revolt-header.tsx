import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function RevoltHeader() {
  return (
    <header className="relative bg-black w-screen -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="flex gap-8">
        {/* Left side - Logo */}
        <div className="relative w-[300px]">
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
        <div className="flex-1 relative h-[200px] overflow-hidden">
          <Image
            src="/images/tiger-banner.jpg"
            alt="Tiger Banner"
            fill
            className="object-cover"
            priority
          />
          <Button 
            variant="outline" 
            className="absolute top-4 right-4 border-[#9A8866] text-[#9A8866] hover:bg-[#9A8866] hover:text-black transition-colors"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}