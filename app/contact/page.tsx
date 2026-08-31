"use client";
import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function Contact() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 800);
  };

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
        kicker="Contact Us"
        title="Let’s talk about your next movement."
        subtitle="Reach us by phone, WhatsApp or the enquiry form — we respond within working hours."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0A1931] text-white rounded-[24px] p-7">
              <h3 className="font-bold text-lg">Indo Asia Cargo Movers</h3>
              <div className="mt-4 space-y-4 text-sm leading-6">
                <div className="flex gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/10 inline-flex items-center justify-center shrink-0">📞</span>
                  <div>
                    <div className="font-bold"><a href="tel:+919000070930">9000070930</a> • <a href="tel:+919838215000">9838215000</a></div>
                    <div className="text-white/60 text-xs mt-1">Tap to call • Available for enquiry & booking</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/10 inline-flex items-center justify-center shrink-0">📍</span>
                  <div className="text-white/90">Plot No. 194B,<br />Telecom Colony, Kalajeguda, Alwal,<br />Hyderabad – 500015, Telangana, India</div>
                </div>
                <div className="flex gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/10 inline-flex items-center justify-center shrink-0">🏢</span>
                  <div className="text-white/70 text-xs leading-5">GSTIN: <span className="text-white font-mono">36CWDPS8255G2Z2</span><br />Legal: Rajender Singh • Trade: Indo Asia Cargo Movers</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href="tel:+919000070930" className="bg-white text-[#0A1931] py-3 rounded-full font-bold text-sm text-center">Call Now</a>
                <a href="https://wa.me/919000070930" target="_blank" className="bg-[#25D366] text-white py-3 rounded-full font-bold text-sm text-center">WhatsApp</a>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
              <div className="h-[300px] bg-slate-100 relative">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Telecom+Colony+Kalajeguda+Alwal+Hyderabad+500015&z=14&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="text-sm font-bold text-[#0A1931]">Find us at Alwal, Hyderabad</span>
                <a href="https://www.google.com/maps/search/?api=1&query=Telecom+Colony+Kalajeguda+Alwal+Hyderabad+500015" target="_blank" className="text-xs font-bold text-[#DC2626]">Open in Maps →</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[24px] p-6 lg:p-8">
              <h2 className="font-bold text-[#0A1931] text-lg">Send an Enquiry — Get a Quote</h2>
              <p className="text-sm text-slate-500 mt-2">Fields marked * are required.</p>

              {done ? (
                <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center">✓</div>
                  <h3 className="font-bold text-[#0A1931] mt-4">Thank you — we’ve received your details.</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-6">We’ll call you back on the number you shared. For urgent needs, call <a href="tel:+919000070930" className="text-[#DC2626] font-bold">90000 70930</a>.</p>
                  <button onClick={() => setDone(false)} className="mt-6 border border-slate-200 px-6 py-2.5 rounded-full font-bold text-sm">Send another</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Full Name *</span><input required placeholder="Your name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Company Name</span><input placeholder="Company" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Mobile *</span><input required pattern="[0-9+\- ]{10,15}" placeholder="90000 70930" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Email</span><input type="email" placeholder="you@company.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Pickup Location *</span><input required placeholder="Hyderabad" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Delivery Location *</span><input required placeholder="Destination" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Cargo Type</span><input placeholder="Machinery / cartons / ODC..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Approx. Weight / Qty</span><input placeholder="e.g. 5 MT / 12 crates" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <label className="space-y-1.5 block"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Preferred Date</span><input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  <label className="space-y-1.5 block"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Message</span><textarea rows={4} placeholder="Anything specific about handling, vehicle preference, timeline..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none" /></label>
                  <button disabled={loading} className="w-full bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 text-white py-4 rounded-full font-bold transition">{loading ? "Sending..." : "Request a Quote →"}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
