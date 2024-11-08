import { GenesisDrops } from '@/components/genesis-drops';
import { GenerativeDrops } from '@/components/generative-drops';
import { RevoltHeader } from '@/components/revolt-header';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <RevoltHeader />
      
      <div className="max-w-4xl mx-auto px-4">
        <section className="py-12">
          {/* Genesis Drop Title */}
          <div className="relative mb-12">
            <div className="border-t border-[#9A8866]/20" />
            <h2 className="text-2xl font-light tracking-[0.2em] text-[#9A8866] text-center px-8 my-4">
              GENESIS DROP
            </h2>
            <div className="border-t border-[#9A8866]/20" />
          </div>
          <GenesisDrops />
        </section>

        <section className="py-12">
          {/* Generative Drop Title */}
          <div className="relative mb-12">
            <div className="border-t border-[#9A8866]/20" />
            <h2 className="text-2xl font-light tracking-[0.2em] text-[#9A8866] text-center px-8 my-4">
              GENERATIVE DROP
            </h2>
            <div className="border-t border-[#9A8866]/20" />
          </div>
          <GenerativeDrops />
        </section>
      </div>
    </main>
  );
}