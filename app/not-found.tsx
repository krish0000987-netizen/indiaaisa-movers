import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1420px] mx-auto px-6 py-16 lg:py-24 text-center">
      <div className="inline-flex bg-slate-900 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">404 — Route not found</div>
      <h1 className="font-display font-black text-[#0A1931] text-4xl lg:text-5xl mt-6 leading-none">Looks like this route<br />took a wrong turn.</h1>
      <p className="text-slate-500 mt-4 max-w-lg mx-auto leading-7">The page you’re looking for doesn’t exist. Head back to our homepage or contact us for assistance.</p>
      <div className="mt-8 flex gap-3 justify-center">
        <Link href="/" className="bg-[#0A1931] text-white px-7 py-3.5 rounded-full font-bold text-sm">Back to Home</Link>
        <Link href="/contact" className="border border-slate-200 px-7 py-3.5 rounded-full font-bold text-sm text-[#0A1931]">Contact Us</Link>
      </div>
      <div className="mt-12 rounded-[24px] overflow-hidden max-w-3xl mx-auto border border-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/company/page_00.jpg" alt="Logistics" className="w-full h-[300px] object-cover" />
      </div>
    </div>
  );
}
