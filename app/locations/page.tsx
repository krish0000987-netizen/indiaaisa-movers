import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Network & Service Locations" };

export default function Locations() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=2070&auto=format&fit=crop"
        kicker="Network & Coverage"
        title="Hyderabad at the centre. Coordinated movement beyond."
        subtitle="Our operations are based in Hyderabad, Telangana — with coordinated transportation to major lanes on enquiry."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[#0A1931] text-2xl">Our base</h2>
            <div className="mt-4 bg-white border border-slate-200 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0A1931] text-white inline-flex items-center justify-center shrink-0">📍</div>
              <div>
                <div className="font-bold text-[#0A1931]">Indo Asia Cargo Movers</div>
                <div className="text-sm text-slate-600 leading-6 mt-1">Plot No. 194B, Telecom Colony, Kalajeguda, Alwal, Hyderabad – 500015, Telangana<br />GSTIN: 36CWDPS8255G2Z2 • Proprietor: Rajender Singh</div>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=Telecom+Colony+Kalajeguda+Alwal+Hyderabad+500015" target="_blank" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-xs font-bold">Get Directions →</a>
                  <a href="tel:+919000070930" className="border border-slate-200 px-4 py-2 rounded-full text-xs font-bold">Call 90000 70930</a>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#0A1931] mt-8">Service lanes</h3>
            <p className="text-sm text-slate-500 mt-2 leading-6">We do not publish an exhaustive “pan-India” map with unverified pins. Coverage is coordinated on the basis of enquiries and available vehicle alignment. Common lanes enquired from Hyderabad include:</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                "Hyderabad ↔ Telangana & Andhra Pradesh",
                "Hyderabad ↔ Maharashtra / Pune / Mumbai",
                "Hyderabad ↔ Karnataka / Bengaluru",
                "Hyderabad ↔ Tamil Nadu / Chennai",
                "Hyderabad ↔ Delhi NCR & North India",
                "Hyderabad ↔ Gujarat & West India",
              ].map((x) => (
                <div key={x} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">{x}</div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">Actual availability is confirmed per enquiry — route, vehicle type and timeline determine planning.</p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 rounded-[24px] p-6">
              <h4 className="font-bold text-[#0A1931]">India network — schematic</h4>
              <p className="text-xs text-slate-500 mt-2">Decorative overview — not a live routing map.</p>
              <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="relative h-[320px] bg-[#0A1931] rounded-xl overflow-hidden p-6">
                  {/* Simple decorative India-like dotted map using CSS */}
                  <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 40%, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="relative">
                    <div className="text-white font-black text-lg">INDIA</div>
                    <div className="text-white/60 text-xs mt-1">Coordinated dispatches from Hyderabad</div>
                    <div className="mt-8 flex flex-col gap-3">
                      <span className="inline-flex items-center gap-2 bg-white text-[#0A1931] px-3 py-1.5 rounded-full text-xs font-bold w-fit">● Hyderabad — Base</span>
                      <span className="inline-flex bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs">North India • South India • East • West</span>
                      <span className="text-white/60 text-xs leading-5 mt-2">Reach out with pickup & delivery cities — we’ll confirm feasibility and vehicle options.</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="mt-6 inline-flex bg-[#DC2626] text-white px-6 py-3 rounded-full font-bold text-sm w-full justify-center">Check a Lane →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
