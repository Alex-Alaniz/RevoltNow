import { GenesisDrops } from '@/components/genesis-drops';
import { GenerativeDrops } from '@/components/generative-drops';
import { RevoltHeader } from '@/components/revolt-header';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <RevoltHeader />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#9A8866]/20 mt-8" />
        </div>

        <section className="mt-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl tracking-wider text-[#9A8866] mb-4">
              DISRUPT, INNOVATE & REVOLT
            </h2>
            <p className="text-[#9A8866] leading-relaxed text-sm">
              REVOLT stands as a testament to my relentless pursuit of artistic autonomy and defiance of conventional norms. This collection is not just a creative expression but a rebellion against the traditional structures that govern both art and economics. With NFT and cryptocurrency representing the future of decentralization, my work mirrors that rejection of conformity, embracing innovation in technique, concept, and execution. It is a challenge to the prevailing narrative, an invitation to rethink, rebuild, and rise against the expected.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto mt-8">
          <div className="border-t border-[#9A8866]/20" />
          <div className="border-t border-[#9A8866]/20 mt-[1px]" />
        </div>

        <section className="py-12">
          <h2 className="text-2xl font-bold tracking-wider text-[#9A8866] mb-12 text-center">GENESIS DROP</h2>
          <GenesisDrops />
        </section>

        <Separator className="bg-[#9A8866]/20" />

        <section className="py-12">
          <h2 className="text-2xl font-bold tracking-wider text-[#9A8866] mb-12 text-center">GENERATIVE DROP</h2>
          <GenerativeDrops />
        </section>
      </div>
    </main>
  );
}