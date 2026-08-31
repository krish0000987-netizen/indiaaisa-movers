import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Full Truck Load (FTL)" };

export default function FTL() {
  return (
    <>
      <PageHero
        image="/company/page_04.jpg"
        kicker="Full Truck Load"
        title="Dedicated vehicle. Direct movement. Clear control."
        subtitle="For businesses that need an entire truck's capacity — large volumes, time-sensitive cargo, or shipments that benefit from reduced handling."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[#0A1931] text-2xl">What is FTL?</h2>
            <p className="mt-3 text-slate-600 leading-7">Full Truck Load means your shipment occupies an entire vehicle. The truck is assigned to your cargo alone and moves directly toward the delivery point, minimizing transshipment and multiple handling.</p>

            <h3 className="font-bold text-[#0A1931] mt-8">When FTL makes sense</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                "Large shipment volumes",
                "Dedicated vehicle requirement",
                "Time-sensitive cargo",
                "Direct transportation preferred",
                "Reduced handling needed",
                "ODC / heavy cargo",
              ].map((x) => (
                <li key={x} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 flex gap-2"><span className="text-emerald-600">✓</span> {x}</li>
              ))}
            </ul>

            <h3 className="font-bold text-[#0A1931] mt-8">Our FTL approach</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                ["01", "Requirement", "Cargo, route & timeline"],
                ["02", "Vehicle", "Matching capacity & type"],
                ["03", "Pickup", "Scheduled loading"],
                ["04", "Transit", "Coordinated movement"],
                ["05", "Delivery", "Confirmation & closure"],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-white border border-slate-100 rounded-2xl p-4 text-center">
                  <div className="text-xs font-bold tracking-widest text-[#DC2626]">{n}</div>
                  <div className="font-bold text-[#0A1931] text-sm mt-1">{t}</div>
                  <div className="text-xs text-slate-500 mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#0A1931] text-white rounded-[24px] p-7">
              <h4 className="font-bold">Benefits at a glance</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80 leading-6">
                <li>• Dedicated capacity — no sharing</li>
                <li>• Simplified handling — less re-loading</li>
                <li>• Better shipment control</li>
                <li>• Direct movement toward destination</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex bg-[#DC2626] text-white px-6 py-3 rounded-full font-bold text-sm w-full justify-center">Discuss Your FTL Requirement →</Link>
              <a href="tel:+919000070930" className="mt-3 inline-flex bg-white text-[#0A1931] px-6 py-3 rounded-full font-bold text-sm w-full justify-center">Call 90000 70930</a>
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_00.jpg" alt="FTL operations" className="w-full h-[220px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
