import Image from 'next/image';

export function DropHeader() {
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
    </header>
  );
}
