"use client";
import HeroSlider from "@/components/HeroSlider";
import { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <HeroSlider onQuote={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Intro / Trust */}
      <section className="max-w-[1420px] mx-auto px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#DC2626] border border-red-100 bg-red-50 px-3 py-1.5 rounded-full">Trusted Hyderabad Logistics</div>
            <h2 className="font-display font-black text-[#0A1931] text-[32px] lg:text-[42px] leading-[1.05] tracking-tight mt-5">
              Reliable Transport &<br /> Logistics Solutions for Businesses That Keep Moving.
            </h2>
            <p className="mt-5 text-slate-600 leading-7 text-[15.5px]">
              Indo Asia Cargo Movers is a Hyderabad-based transport and logistics business supporting companies that require dependable cargo movement and distribution. We focus on professional coordination, safety-conscious handling and responsive communication — so your goods move with clarity and care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="bg-[#0A1931] text-white px-6 py-3 rounded-full font-bold text-sm">About Us →</Link>
              <a href="tel:+919000070930" className="border border-slate-200 px-6 py-3 rounded-full font-bold text-sm text-[#0A1931]">Call 90000 70930</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0A1931] text-white rounded-[20px] p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-bold leading-tight">Safety-conscious handling</div>
                <p className="text-sm text-white/70 mt-2 leading-6">Careful loading, securing and transit planning for commercial cargo.</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-[20px] p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <div className="font-bold text-[#0A1931] leading-tight">Timely coordination</div>
                <p className="text-sm text-slate-500 mt-2 leading-6">Clear pickup planning and transit follow-ups.</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-[20px] p-6">
                <div className="text-3xl mb-3">🤝</div>
                <div className="font-bold text-[#0A1931] leading-tight">Business-focused</div>
                <p className="text-sm text-slate-500 mt-2 leading-6">Solutions built around your shipment, not the other way round.</p>
              </div>
              <div className="bg-[#DC2626] text-white rounded-[20px] p-6">
                <div className="text-3xl mb-3">📞</div>
                <div className="font-bold leading-tight">Responsive support</div>
                <p className="text-sm text-white/80 mt-2 leading-6">Direct phone & WhatsApp assistance when it matters.</p>
              </div>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 flex gap-3">
              <span className="text-amber-600">●</span>
              <p className="text-xs leading-5 text-slate-700"><strong>GSTIN: 36CWDPS8255G2Z2</strong> — Trade Name: Indo Asia Cargo Movers • Proprietor: Rajender Singh • Hyderabad – 500015</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1420px] mx-auto px-6 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#DC2626]">What We Do</div>
              <h3 className="font-display font-black text-[#0A1931] text-[30px] lg:text-[38px] leading-none mt-3">Built around your cargo.</h3>
            </div>
            <Link href="/services" className="text-sm font-bold text-[#0A1931] border border-slate-200 bg-white px-6 py-3 rounded-full w-fit">View All Services →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Full Truck Load (FTL)", desc: "Dedicated vehicle capacity for large or time-sensitive shipments.", img: "/company/page_08.jpg", href: "/ftl" },
              { title: "Part Truck Load (PTL)", desc: "Economical sharing of vehicle capacity for medium loads.", img: "/company/page_02.jpg", href: "/ptl-cargo" },
              { title: "Cargo Transportation", desc: "Professional movement of commercial cargo with secure handling.", img: "/company/page_05.jpg", href: "/ptl-cargo" },
              { title: "Warehousing Support", desc: "Storage & logistics coordination via partner facilities where needed.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop", href: "/warehousing" },
              { title: "Distribution", desc: "Moving goods from storage or origin toward business destinations.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop", href: "/warehousing" },
              { title: "Customized Logistics", desc: "Tailored solutions planned around your route, volume & timeline.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", href: "/services" },
            ].map((c) => (
              <Link key={c.title} href={c.href} className="group bg-white rounded-[22px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-[190px] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#0A1931]">Indo Asia</div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0A1931] text-[17px]">{c.title}</h4>
                  <p className="text-sm text-slate-500 mt-2 leading-6">{c.desc}</p>
                  <span className="mt-4 inline-flex text-sm font-bold text-[#DC2626]">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-[1420px] mx-auto px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#DC2626]">Why Choose Us</div>
            <h3 className="font-display font-black text-[#0A1931] text-[32px] leading-none mt-3">Professional on<br />every movement.</h3>
            <p className="mt-4 text-slate-600 leading-7">We don't make inflated claims. We focus on what we do best: reliable coordination, honest communication and careful handling.</p>
            <div className="mt-8 rounded-[20px] overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_04.jpg" alt="Logistics coordination" className="w-full h-[220px] object-cover" />
              <div className="p-5 bg-[#0A1931] text-white">
                <div className="font-bold">Hyderabad • Telecom Colony, Alwal</div>
                <div className="text-sm text-white/70 mt-1">Plot No. 194B — base for coordinated dispatches</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 content-start">
            {[
              ["Reliable transportation", "Dedicated planning for each movement, from enquiry to delivery."],
              ["Professional handling", "Secure loading and careful transit practices."],
              ["Timely coordination", "Proactive updates and clear scheduling."],
              ["Business-focused service", "Solutions built around your cargo, not templates."],
              ["Safety-conscious", "Attention to load security and handling."],
              ["Customer support", "Phone & WhatsApp assistance when you need it."],
              ["Flexible solutions", "FTL or PTL, single or recurring movements."],
              ["Operational efficiency", "Streamlined pickup, transit and delivery flow."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition">
                <div className="w-9 h-9 rounded-full bg-[#0A1931] text-white inline-flex items-center justify-center text-sm">✓</div>
                <h4 className="font-bold text-[#0A1931] mt-4 text-sm">{title}</h4>
                <p className="text-sm text-slate-500 mt-2 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0A1931] text-white">
        <div className="max-w-[1420px] mx-auto px-6 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
            <h3 className="font-display font-black text-[30px] lg:text-[38px] leading-none">How it moves.<br /><span className="text-white/60">Simple. Coordinated. Clear.</span></h3>
            <p className="text-white/70 max-w-md leading-7">From enquiry to delivery, each shipment follows a coordinated flow designed for clarity and accountability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              ["01", "Enquiry", "Share pickup, delivery & cargo details."],
              ["02", "Assessment", "We plan vehicle, route & handling."],
              ["03", "Pickup Planning", "Scheduled loading & documentation."],
              ["04", "Transportation", "Monitored movement toward destination."],
              ["05", "Delivery", "Handover with confirmation."],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="text-[11px] font-bold tracking-widest uppercase text-white/50">{num}</div>
                <div className="font-bold mt-2">{title}</div>
                <div className="text-sm text-white/60 mt-2 leading-6">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-[1420px] mx-auto px-6 py-14 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#DC2626]">Industries We Support</div>
          <h3 className="font-display font-black text-[#0A1931] text-[32px] lg:text-[36px] leading-none mt-3">Where reliable logistics matters.</h3>
          <p className="text-slate-500 leading-7 mt-4">We support general commercial cargo across sectors — without claiming certifications we don’t hold.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {[
            ["Manufacturing", "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=600&auto=format&fit=crop"],
            ["Retail", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"],
            ["E-commerce", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"],
            ["FMCG", "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"],
            ["Industrial Goods", "/company/page_00.jpg"],
            ["Pharmaceuticals*", "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=600&auto=format&fit=crop"],
            ["Automotive", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop"],
            ["Electronics", "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop"],
            ["Construction", "/company/page_18.jpg"],
            ["General Cargo", "/company/page_02.jpg"],
          ].map(([label, img]) => (
            <div key={label} className="group relative h-[180px] rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-white font-bold text-sm leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">* General logistics support — any specialized pharma handling subject to shipper requirements.</p>
      </section>

      {/* Company photos gallery */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1420px] mx-auto px-6 py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
            <h3 className="font-display font-black text-[#0A1931] text-2xl">On the road — real operations.</h3>
            <Link href="/about" className="text-sm font-bold text-[#DC2626]">See Company Photos →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {["page_15.jpg","page_16.jpg","page_07.jpg","page_09.jpg","page_10.jpg","page_11.jpg","page_12.jpg","page_18.jpg","page_19.jpg","page_20.jpg","page_06.jpg","page_04.jpg"].map((f) => (
              <div key={f} className="h-[140px] rounded-2xl overflow-hidden bg-white border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/company/${f}`} alt="Indo Asia operations" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1519003722824-194243704534?q=80&w=2070&auto=format&fit=crop" alt="Highway logistics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0A1931]/85" />
        </div>
        <div className="relative max-w-[1420px] mx-auto px-6 py-16 lg:py-24 text-center">
          <h3 className="font-display font-black text-white text-[32px] lg:text-[48px] leading-none">Let’s Move Your Cargo Forward.</h3>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-7">Share your pickup, delivery and cargo details — we’ll plan the right vehicle and timeline.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setQuoteOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold">Request a Quote →</button>
            <a href="tel:+919000070930" className="bg-white text-[#0A1931] px-8 py-4 rounded-full font-bold">Call 9000070930</a>
          </div>
          <div className="mt-6 text-white/60 text-xs tracking-wide">Plot No. 194B, Telecom Colony, Kalajeguda, Alwal, Hyderabad – 500015</div>
        </div>
      </section>
    </>
  );
}
