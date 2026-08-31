"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { image: string; title: string; subtitle: string; cta: string };

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    title: "Moving Business Forward.",
    subtitle: "Reliable Transport & Logistics Solutions Built Around Your Business.",
    cta: "Get a Quote",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    title: "Cargo Handled With Confidence.",
    subtitle: "From heavy machinery to commercial cargo — coordinated with care.",
    cta: "Explore Services",
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    title: "Smarter Logistics. Better Distribution.",
    subtitle: "Warehousing & distribution support that keeps your supply chain moving.",
    cta: "Our Warehousing",
  },
  {
    image: "https://images.unsplash.com/photo-1519003722824-194243704534?q=80&w=2070&auto=format&fit=crop",
    title: "Reliable Transportation. Every Mile.",
    subtitle: "Dedicated vehicles, professional handling and timely coordination.",
    cta: "Full Truck Load",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Connecting Businesses Across India.",
    subtitle: "Hyderabad-based operations with coordinated pan-India movement.",
    cta: "Our Network",
  },
];

export default function HeroSlider({ onQuote }: { onQuote: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);

  const s = slides[index];

  return (
    <div className="bg-[#061227]">
      {/* Slider */}
      <div className="max-w-[1420px] mx-auto">
        {/* Desktop: overlay text on image */}
        <div className="hidden lg:block relative h-[560px] overflow-hidden rounded-b-[28px]">
          {slides.map((slide, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061227]/90 via-[#061227]/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061227]/60 to-transparent" />
            </div>
          ))}

          {/* Content overlay */}
          <div className="relative z-10 h-full flex items-center px-10 xl:px-14">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Indo Asia Cargo Movers • Hyderabad
              </div>
              <h1 className="font-display font-black text-white text-[48px] xl:text-[56px] leading-[0.95] tracking-tight">
                {s.title}
              </h1>
              <p className="mt-4 text-white/80 text-[17px] leading-7 max-w-[520px]">{s.subtitle}</p>
              <div className="mt-8 flex gap-3">
                <button onClick={onQuote} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg">Get a Quote →</button>
                <a href="tel:+919000070930" className="bg-white text-[#0A1931] px-7 py-3.5 rounded-full font-bold text-sm">Call 90000 70930</a>
              </div>
            </div>
          </div>

          {/* indicators */}
          <div className="absolute bottom-6 left-10 xl:left-14 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-white" : "w-6 bg-white/40 hover:bg-white/70"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
          <div className="absolute bottom-6 right-10 z-20 text-white/60 text-xs font-mono">0{index + 1} / 0{slides.length}</div>
        </div>

        {/* Mobile: image clean, text below */}
        <div className="lg:hidden">
          <div className="relative h-[280px] sm:h-[340px] overflow-hidden bg-slate-900">
            {slides.map((slide, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {slides.map((_, i) => (
                <span key={i} className={`h-1 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/60"}`} />
              ))}
            </div>
          </div>
          <div className="bg-white px-5 py-6">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">Indo Asia Cargo Movers</div>
            <h1 className="font-display font-black text-[#0A1931] text-[28px] leading-[1.1] tracking-tight">{s.title}</h1>
            <p className="mt-3 text-slate-600 text-[15px] leading-6">{s.subtitle}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button onClick={onQuote} className="bg-[#DC2626] text-white py-3.5 rounded-full font-bold text-sm text-center">Get a Quote</button>
              <a href="tel:+919000070930" className="bg-slate-900 text-white py-3.5 rounded-full font-bold text-sm text-center">Call Now</a>
            </div>
            <a href="/services" className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-[#0A1931] py-2">Explore Our Services →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
