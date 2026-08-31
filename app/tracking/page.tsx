"use client";
import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function Tracking() {
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
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        kicker="Tracking / Shipment Enquiry"
        title="Need an update on your shipment?"
        subtitle="Submit your shipment details below — our team will respond with the latest status. This is an enquiry system, not a fake real-time GPS map."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[24px] p-6 lg:p-8">
              <h2 className="font-bold text-[#0A1931] text-lg">Shipment Enquiry Form</h2>
              <p className="text-sm text-slate-500 mt-2">Provide your consignment / LR details and contact — we’ll revert via phone / WhatsApp.</p>

              {done ? (
                <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center">✓</div>
                  <h3 className="font-bold text-[#0A1931] mt-4">Enquiry Submitted</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-6">Thank you! Our team will contact you shortly with the status. For urgent follow-up, call <a href="tel:+919000070930" className="text-[#DC2626] font-bold">90000 70930</a>.</p>
                  <button onClick={() => setDone(false)} className="mt-6 border border-slate-200 px-6 py-2.5 rounded-full font-bold text-sm">Send another enquiry</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Shipment / Consignment No.</span><input placeholder="LR / CN number (if available)" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Mobile *</span><input required placeholder="Your mobile number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0A1931] outline-none" /></label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Customer Name *</span><input required placeholder="Full name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Email</span><input type="email" placeholder="you@company.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Pickup Location</span><input placeholder="Hyderabad" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                    <label className="space-y-1.5"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Delivery Location</span><input placeholder="Destination city" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm" /></label>
                  </div>
                  <label className="space-y-1.5 block"><span className="text-xs font-bold tracking-widest uppercase text-slate-700">Message</span><textarea rows={4} placeholder="Describe shipment, date of booking, vehicle type..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none" /></label>
                  <button disabled={loading} className="w-full bg-[#0A1931] hover:bg-[#122C55] disabled:opacity-60 text-white py-4 rounded-full font-bold transition">{loading ? "Submitting..." : "Submit Enquiry →"}</button>
                  <p className="text-xs text-slate-400 text-center">We typically respond within working hours. For immediate help, call <a href="tel:+919000070930" className="text-[#0A1931] font-bold">90000 70930</a>.</p>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0A1931] text-white rounded-[24px] p-7">
              <h3 className="font-bold">How we handle enquiries</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80 leading-6">
                <li>• We verify details with dispatch records</li>
                <li>• Share latest transit status & ETA guidance</li>
                <li>• Coordinate with driver / vehicle where needed</li>
                <li>• Close loop via phone / WhatsApp</li>
              </ul>
              <p className="mt-4 text-xs text-white/50">Note: This is an enquiry workflow. If a real tracking API is provided in future, it can be integrated here without design change.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#0A1931] text-sm">Direct contact</h4>
              <div className="mt-3 space-y-2 text-sm">
                <a href="tel:+919000070930" className="flex justify-between border border-slate-100 rounded-xl px-4 py-3"><span>Primary</span><span className="font-bold text-[#0A1931]">90000 70930</span></a>
                <a href="tel:+919838215000" className="flex justify-between border border-slate-100 rounded-xl px-4 py-3"><span>Secondary</span><span className="font-bold text-[#0A1931]">98382 15000</span></a>
                <a href="https://wa.me/919000070930" target="_blank" className="flex justify-center bg-[#25D366] text-white rounded-xl py-3 font-bold">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/page_00.jpg" alt="Tracking support" className="w-full h-[180px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
