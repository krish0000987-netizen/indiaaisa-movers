import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "PTL & Cargo" };

export default function PTL() {
  return (
    <>
      <PageHero
        image="/company/page_02.jpg"
        kicker="Part Truck Load & Cargo"
        title="Flexible capacity. Professional cargo handling."
        subtitle="For medium-sized and regular commercial shipments — consolidated, coordinated and moved with care."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[#0A1931] text-2xl">PTL explained</h2>
            <p className="mt-3 text-slate-600 leading-7">Part Truck Load means your shipment shares vehicle capacity with other consignments moving along compatible routes. It’s an economical way to transport goods that don’t require an entire truck.</p>

            <h3 className="font-bold text-[#0A1931] mt-8">Suitable for</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {["Medium-sized shipments", "Regular commercial cargo", "Businesses not needing a full truck", "Cost-conscious regional moves"].map((x) => (
                <div key={x} className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">{x}</div>
              ))}
            </div>

            <h3 className="font-bold text-[#0A1931] mt-8">Shipment journey</h3>
            <div className="mt-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-wrap gap-2 items-center text-sm font-bold text-[#0A1931]">
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Pickup</span> <span>→</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Coordination</span> <span>→</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Transit</span> <span>→</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Destination</span> <span>→</span>
              <span className="bg-[#0A1931] text-white px-4 py-2 rounded-full">Delivery</span>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_05.jpg" alt="Cargo handling" className="w-full h-[260px] object-cover" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 rounded-[24px] p-7">
              <h4 className="font-bold text-[#0A1931]">Cargo handling approach</h4>
              <ol className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
                <li><strong className="text-[#0A1931]">1. Requirement capture:</strong> Cargo type, dimensions, weight & route.</li>
                <li><strong className="text-[#0A1931]">2. Consolidation planning:</strong> Matching with compatible loads & vehicle.</li>
                <li><strong className="text-[#0A1931]">3. Securing & loading:</strong> Attention to securing and transit care.</li>
                <li><strong className="text-[#0A1931]">4. Coordinated transit:</strong> Updates and follow-ups en route.</li>
              </ol>
              <Link href="/contact" className="mt-6 inline-flex bg-[#DC2626] text-white px-6 py-3 rounded-full font-bold text-sm w-full justify-center">Send Your Cargo Requirement →</Link>
              <p className="text-xs text-slate-400 mt-3 text-center">Photos above are from our actual operations.</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["page_15.jpg","page_10.jpg"].map(f=>(
                // eslint-disable-next-line @next/next/no-img-element
                <img key={f} src={`/company/${f}`} alt="cargo" className="h-[140px] w-full object-cover rounded-2xl border border-slate-100" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
