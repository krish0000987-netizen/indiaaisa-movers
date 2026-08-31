export const metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 lg:py-16">
      <h1 className="font-display font-black text-[#0A1931] text-3xl">Terms & Conditions</h1>
      <p className="text-sm text-slate-500 mt-2">Indo Asia Cargo Movers</p>
      <div className="prose prose-slate max-w-none mt-8 text-sm leading-7 text-slate-700">
        <p>By using this website and submitting enquiries, you agree to the following terms. All transportation services are subject to a separate quotation, confirmation and applicable commercial terms agreed at the time of booking.</p>
        <h3 className="font-bold text-[#0A1931] mt-8">Quotations & bookings</h3>
        <p>Quotes provided via phone, WhatsApp or online forms are based on the information supplied and are subject to vehicle availability, route feasibility and final confirmation.</p>
        <h3 className="font-bold text-[#0A1931] mt-8">Liability</h3>
        <p>Details regarding transit, handling and liability are governed by the specific consignment documentation and agreed terms for each shipment.</p>
        <h3 className="font-bold text-[#0A1931] mt-8">Website content</h3>
        <p>Content on this website is for general information. For verified company information, refer to official documents and direct communication with our team.</p>
        <p className="mt-6"><a href="/contact" className="text-[#DC2626] font-bold">Contact us</a> for any clarifications.</p>
      </div>
    </div>
  );
}
