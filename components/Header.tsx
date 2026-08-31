"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ftl", label: "FTL" },
  { href: "/ptl-cargo", label: "PTL & Cargo" },
  { href: "/warehousing", label: "Warehousing" },
  { href: "/industries", label: "Industries" },
  { href: "/tracking", label: "Tracking" },
  { href: "/locations", label: "Network" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0A1931] text-white text-[12px] tracking-wide">
        <div className="max-w-[1420px] mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6 opacity-90">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Hyderabad • Operational Support</span>
            <span className="hidden xl:inline opacity-70">Plot No. 194B, Telecom Colony, Kalajeguda, Alwal – 500015</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919000070930" className="hover:text-white/80">+91 90000 70930</a>
            <span className="opacity-30">|</span>
            <a href="tel:+919838215000" className="hover:text-white/80">+91 98382 15000</a>
            <a href="https://wa.me/919000070930" target="_blank" className="ml-3 bg-[#25D366] text-white px-3 py-1 rounded-full text-[11px] font-semibold">WhatsApp</a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white border-b transition-all ${scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-slate-200" : "border-slate-100"} `}>
        <div className={`max-w-[1420px] mx-auto px-4 lg:px-6 flex items-center justify-between transition-all ${scrolled ? "h-[68px]" : "h-[78px]"}`}>
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-[44px] w-[190px] lg:h-[48px] lg:w-[210px]">
              <Image src="/logo.jpeg" alt="Indo Asia Cargo Movers" fill className="object-contain object-left" priority />
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link key={n.href} href={n.href} className={`px-3 py-2 text-[13px] font-semibold tracking-wide uppercase rounded-md transition ${active ? "text-[#DC2626] bg-red-50" : "text-slate-700 hover:text-[#0A1931] hover:bg-slate-50"}`}>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <a href="tel:+919000070930" className="hidden lg:inline-flex items-center gap-2 text-[13px] font-bold text-[#0A1931] border border-slate-200 px-4 py-2.5 rounded-full hover:bg-slate-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 1.93 4.28 2 2 0 0 1 3.91 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" /></svg>
              90000 70930
            </a>
            <button onClick={onQuote} className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold px-5 lg:px-6 py-2.5 lg:py-3 rounded-full transition shadow-[0_6px_20px_rgba(220,38,38,0.3)]">
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button onClick={() => setOpen(!open)} className="xl:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white ml-1">
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="xl:hidden absolute inset-x-0 top-[68px] bg-white border-t border-slate-100 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto">
            <nav className="p-4 grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className={`px-4 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-wide border ${pathname === n.href ? "bg-[#0A1931] text-white border-[#0A1931]" : "bg-slate-50 text-slate-800 border-slate-100"}`}>
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-6 pt-2 grid grid-cols-2 gap-3">
              <a href="tel:+919000070930" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-full font-bold text-sm">Call Now</a>
              <button onClick={onQuote} className="bg-[#DC2626] text-white py-3.5 rounded-full font-bold text-sm">Get Quote</button>
            </div>
            <div className="px-6 pb-6 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              Indo Asia Cargo Movers — Plot No. 194B, Telecom Colony, Kalajeguda, Alwal, Hyderabad – 500015<br />
              GSTIN: 36CWDPS8255G2Z2 • Proprietor: Rajender Singh
            </div>
          </div>
        )}
      </header>
    </>
  );
}
