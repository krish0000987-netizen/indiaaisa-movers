import Link from "next/link";
import Image from "next/image";

export default function Footer({ onQuote }: { onQuote: () => void }) {
  return (
    <footer className="bg-[#061227] text-slate-300">
      <div className="max-w-[1420px] mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-4 inline-flex mb-6">
              <div className="relative h-10 w-48"><Image src="/logo.jpeg" alt="Indo Asia Cargo Movers" fill className="object-contain" /></div>
            </div>
            <p className="text-[14px] leading-7 text-slate-300 max-w-md">
              Reliable Transport & Logistics Solutions for businesses that keep moving. Based in Hyderabad, supporting cargo movement with coordination, care and timely communication.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="tel:+919000070930" className="bg-white text-[#0A1931] px-5 py-2.5 rounded-full text-sm font-bold">Call 90000 70930</a>
              <a href="https://wa.me/919000070930" target="_blank" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold">WhatsApp</a>
            </div>
            <div className="mt-6 text-xs leading-5 text-slate-400">
              GSTIN: <span className="text-slate-200 font-mono">36CWDPS8255G2Z2</span> • Legal Name: Rajender Singh<br />
              Trade Name: Indo Asia Cargo Movers • Constitution: Proprietorship
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Full Truck Load", "/ftl"],
                ["PTL & Cargo", "/ptl-cargo"],
                ["Warehousing", "/warehousing"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 opacity-0 lg:opacity-100">Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Industries", "/industries"],
                ["Tracking / Enquiry", "/tracking"],
                ["Network / Locations", "/locations"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-white/10 inline-flex items-center justify-center shrink-0">📞</span>
                <div>
                  <div className="font-bold text-white"><a href="tel:+919000070930" className="hover:underline">9000070930</a> • <a href="tel:+919838215000" className="hover:underline">9838215000</a></div>
                  <div className="text-slate-400 text-xs mt-1">Call for enquiry & booking</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-white/10 inline-flex items-center justify-center shrink-0">📍</span>
                <div className="leading-6 text-slate-300">
                  Plot No. 194B,<br />Telecom Colony, Kalajeguda, Alwal,<br />Hyderabad – 500015, Telangana, India
                </div>
              </div>
              <button onClick={onQuote} className="w-full mt-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white py-3.5 rounded-full font-bold transition">Request a Transportation Quote →</button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Indo Asia Cargo Movers. All rights reserved. • Hyderabad, Telangana.</span>
          <span>Designed as a premium corporate logistics website • Not a template</span>
        </div>
      </div>
    </footer>
  );
}
