export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 lg:py-16">
      <h1 className="font-display font-black text-[#0A1931] text-3xl">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mt-2">Indo Asia Cargo Movers — Last updated August 2026</p>
      <div className="prose prose-slate max-w-none mt-8 text-sm leading-7 text-slate-700">
        <p>We respect your privacy. This website collects information you voluntarily provide via enquiry and quote forms (name, company, phone, email, shipment details) to respond to your logistics requirements.</p>
        <h3 className="font-bold text-[#0A1931] mt-8">How we use information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to enquiries and provide transportation quotations.</li>
          <li>To coordinate pickup, transit and delivery communication.</li>
          <li>To improve our services and website experience.</li>
        </ul>
        <h3 className="font-bold text-[#0A1931] mt-8">Data retention & sharing</h3>
        <p>We retain enquiry data only as long as needed for operational follow-up and do not sell your personal information. We may share data with trusted service providers solely to fulfill your request.</p>
        <h3 className="font-bold text-[#0A1931] mt-8">Contact</h3>
        <p>For privacy requests, contact us at the address on our <a href="/contact" className="text-[#DC2626] font-bold">Contact page</a> or call 90000 70930.</p>
      </div>
    </div>
  );
}
