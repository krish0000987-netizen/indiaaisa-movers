import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Warehousing & Distribution" };

export default function Warehousing() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
        kicker="Warehousing & Distribution"
        title="Storage, staging and onward movement — coordinated."
        subtitle="Warehousing support and distribution coordination where applicable, linked with transportation for smoother flows."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[#0A1931] text-2xl">Warehousing — where needed</h2>
            <p className="mt-3 text-slate-600 leading-7">We provide warehousing support through partner facilities where the requirement involves staging, storage or consolidated dispatch. If your operation needs temporary holding before distribution, we coordinate the link between storage and transport.</p>
            <p className="mt-3 text-slate-500 text-sm leading-6 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">Note: We do not claim to own warehouses unless verified. Where warehousing is required, it is arranged via partners and communicated transparently.</p>

            <h3 className="font-bold text-[#0A1931] mt-8">Distribution</h3>
            <p className="mt-3 text-slate-600 leading-7">Movement of goods from warehouse or origin toward customers and business destinations. We align vehicle, route and timing to your dispatch plan.</p>

            <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-slate-500">Flow</div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-bold text-[#0A1931]">
                <span className="bg-white px-4 py-2 rounded-full border border-slate-200">Warehouse</span> →
                <span className="bg-white px-4 py-2 rounded-full border border-slate-200">Transport</span> →
                <span className="bg-white px-4 py-2 rounded-full border border-slate-200">Distribution</span> →
                <span className="bg-[#0A1931] text-white px-4 py-2 rounded-full">Delivery</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" alt="warehouse" className="w-full h-[160px] object-cover" />
                <div className="p-4 text-sm font-bold text-[#0A1931]">Organized dispatch</div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" alt="distribution" className="w-full h-[160px] object-cover" />
                <div className="p-4 text-sm font-bold text-[#0A1931]">Distribution links</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0A1931] text-white rounded-[24px] p-7">
              <h4 className="font-bold">Benefits</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80 leading-6">
                <li>• Better inventory movement & staging</li>
                <li>• Organized dispatch & loading</li>
                <li>• Efficient onward distribution</li>
                <li>• Transportation coordination from one point</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex bg-white text-[#0A1931] px-6 py-3 rounded-full font-bold text-sm w-full justify-center">Discuss Warehousing Need →</Link>
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_08.jpg" alt="warehousing transport" className="w-full h-[220px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
