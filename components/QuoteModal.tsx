"use client";
import { useState } from "react";

export default function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  if (!open) return null;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); setTimeout(() => { setDone(false); onClose(); }, 2500); }, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#0A1931]/60 backdrop-blur-sm" />
      <div className="relative bg-white rounded-[24px] max-w-[560px] w-full max-h-[90vh] overflow-auto shadow-2xl">
        <div className="sticky top-0 bg-white px-7 py-6 border-b border-slate-100 flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-black text-[#0A1931] tracking-tight">Request a Transportation Quote</h3>
            <p className="text-sm text-slate-500 mt-1">Tell us your requirement — we’ll get back within hours.</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-slate-100 inline-flex items-center justify-center shrink-0">✕</button>
        </div>

        {done ? (
          <div className="px-7 py-14 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-2xl mb-4">✓</div>
            <h4 className="font-bold text-lg text-slate-900">Enquiry Received</h4>
            <p className="text-sm text-slate-500 mt-2">Thank you! Our team will contact you on your phone / email shortly.</p>
            <a href="tel:+919000070930" className="mt-6 inline-flex bg-[#0A1931] text-white px-6 py-3 rounded-full font-bold text-sm">Call 90000 70930</a>
          </div>
        ) : (
          <form onSubmit={submit} className="px-7 py-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Full Name *</span><input required placeholder="Your name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Company</span><input placeholder="Company name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Mobile *</span><input required pattern="[0-9+\- ]{10,15}" placeholder="90000 70930" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Email</span><input type="email" placeholder="you@company.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Pickup City *</span><input required placeholder="Hyderabad" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Delivery City *</span><input required placeholder="Delhi / Mumbai / ..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Cargo Type</span><input placeholder="Machinery / General cargo..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Weight / Qty</span><input placeholder="e.g. 10 MT / 2 units" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Vehicle</span>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white"><option>Dedicated / FTL</option><option>Part Load / PTL</option><option>Open to suggestion</option></select>
              </label>
              <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Pickup Date</span><input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
            </div>
            <label className="space-y-1.5 block"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Requirements</span><textarea rows={3} placeholder="Any special handling, dimensions, timeline..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none" /></label>
            <button disabled={loading} className="w-full bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 text-white py-4 rounded-full font-bold transition">{loading ? "Submitting..." : "Request Transportation Quote →"}</button>
            <p className="text-center text-xs text-slate-400">Or call directly: <a href="tel:+919000070930" className="text-[#0A1931] font-bold">90000 70930</a> • <a href="tel:+919838215000" className="text-[#0A1931] font-bold">98382 15000</a></p>
          </form>
        )}
      </div>
    </div>
  );
}
