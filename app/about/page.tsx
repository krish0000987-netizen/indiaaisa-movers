import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
        kicker="About Indo Asia Cargo Movers"
        title="Hyderabad-based. Business-minded. Built on reliability."
        subtitle="We are a transport and logistics business operating from Telecom Colony, Alwal — focused on dependable cargo movement for commercial clients."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[#0A1931] text-2xl lg:text-3xl leading-tight">Indo Asia Cargo Movers — Professional transport coordination.</h2>
            <p className="mt-4 text-slate-600 leading-7">Based at Plot No. 194B, Telecom Colony, Kalajeguda, Alwal, Hyderabad – 500015, we support businesses that depend on the timely and secure movement of goods. Our work is centered on clear communication, careful handling and operational discipline.</p>
            <p className="mt-4 text-slate-600 leading-7">We engage in Full Truck Load, Part Truck Load and general cargo transportation, with warehousing & distribution coordination where required through partner facilities. We do not inflate fleet numbers, branches or legacy — we focus on what we do reliably, today.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-500">Legal Entity</div>
                <div className="font-bold text-[#0A1931] mt-2 text-sm leading-6">Proprietorship<br />Legal Name: Rajender Singh<br />Trade Name: Indo Asia Cargo Movers</div>
              </div>
              <div className="bg-[#0A1931] text-white rounded-2xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-white/60">GSTIN</div>
                <div className="font-mono font-bold mt-2">36CWDPS8255G2Z2</div>
                <div className="text-xs text-white/60 mt-2 leading-5">Registered: 12/01/2026 • Regular • Principal Place: 1-30-238/1, Telecom Colony, Khanaji Guda, Alwal, Secunderabad, Medchal Malkajgiri – 500015</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[24px] overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_08.jpg" alt="Fleet operations" className="w-full h-[300px] object-cover" />
              <div className="p-5">
                <div className="font-bold text-[#0A1931]">Real vehicles. Real loads.</div>
                <p className="text-sm text-slate-500 mt-2 leading-6">Images on this website include actual company operations — heavy and ODC cargo handled with on-ground coordination.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["page_02.jpg","page_05.jpg","page_18.jpg"].map(f=>(
                // eslint-disable-next-line @next/next/no-img-element
                <img key={f} src={`/company/${f}`} alt="operation" className="h-[90px] w-full object-cover rounded-xl border border-slate-100" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <h3 className="font-bold text-[#0A1931]">Our Mission</h3>
              <p className="text-sm text-slate-600 mt-3 leading-7">To provide reliable, well-coordinated transportation that businesses can count on — with transparent communication and careful cargo handling.</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <h3 className="font-bold text-[#0A1931]">Our Vision</h3>
              <p className="text-sm text-slate-600 mt-3 leading-7">To be a trusted regional logistics partner known for operational clarity and service consistency — growing through referrals and repeat business.</p>
            </div>
            <div className="bg-[#0A1931] rounded-2xl p-7 text-white">
              <h3 className="font-bold">Why reliability matters</h3>
              <p className="text-sm text-white/70 mt-3 leading-7">Dependable transportation protects sales, inventory flow and customer commitments. We treat every movement as a business-critical delivery.</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-display font-black text-[#0A1931] text-xl">Our Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                ["Reliability", "Doing what we commit, consistently."],
                ["Integrity", "Honest advice on mode, cost and timelines."],
                ["Safety", "Secure loading and careful transit practices."],
                ["Customer Focus", "Your cargo, your timeline — our planning."],
                ["Accountability", "Clear ownership from pickup to delivery."],
                ["Efficiency", "Minimizing handling, delays and uncertainty."],
              ].map(([t,d])=>(
                <div key={t} className="bg-white border border-slate-100 rounded-2xl p-6">
                  <div className="font-bold text-[#0A1931] text-sm">{t}</div>
                  <div className="text-sm text-slate-500 mt-2 leading-6">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1420px] mx-auto px-6 py-12">
        <h3 className="font-display font-black text-[#0A1931] text-xl">Company Information — Verified</h3>
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 lg:p-8 space-y-4 text-sm leading-6 text-slate-700">
              <div><strong>Business:</strong> Indo Asia Cargo Movers</div>
              <div><strong>Legal Name:</strong> Rajender Singh</div>
              <div><strong>Address:</strong> Plot No. 194B, Telecom Colony, Kalajeguda, Alwal, Hyderabad – 500015, Telangana</div>
              <div><strong>Registered Address (GST):</strong> 1-30-238/1, Telecom Colony, Khanaji Guda, Alwal, Secunderabad, Medchal Malkajgiri – 500015</div>
              <div><strong>Phones:</strong> <a href="tel:+919000070930" className="text-[#DC2626] font-bold">9000070930</a> • <a href="tel:+919838215000" className="text-[#DC2626] font-bold">9838215000</a></div>
            </div>
            <div className="p-6 lg:p-8 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 space-y-4 text-sm leading-6 text-slate-700">
              <div><strong>GSTIN:</strong> <span className="font-mono font-bold">36CWDPS8255G2Z2</span></div>
              <div><strong>Date of Registration:</strong> 12/01/2026</div>
              <div><strong>Constitution:</strong> Proprietorship</div>
              <div><strong>Additional Places of Business:</strong> 0 (as per certificate)</div>
              <div className="text-xs text-slate-500 leading-5">Note: This page uses only verified information from the GST certificate. We do not publish invented fleet size, turnover or certifications.</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="bg-[#DC2626] text-white px-6 py-3 rounded-full font-bold text-sm">Contact Us →</Link>
          <Link href="/services" className="border border-slate-200 px-6 py-3 rounded-full font-bold text-sm text-[#0A1931]">Explore Services</Link>
        </div>
      </section>
    </>
  );
}
