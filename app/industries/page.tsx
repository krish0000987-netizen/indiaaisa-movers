import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Industries We Serve" };

const industries = [
  { title: "Manufacturing", desc: "Movement of industrial goods and materials between plants, vendors and customers.", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=700&auto=format&fit=crop" },
  { title: "FMCG", desc: "Commercial distribution support for fast-moving goods and regional replenishment.", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=700&auto=format&fit=crop" },
  { title: "Retail", desc: "Transportation for retail supply chains — store replenishment and warehouse moves.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=700&auto=format&fit=crop" },
  { title: "E-commerce", desc: "Cargo movement and distribution support for commerce-led supply chains.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop" },
  { title: "Automotive", desc: "Transportation of relevant commercial cargo and ancillaries.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=700&auto=format&fit=crop" },
  { title: "Electronics", desc: "Careful handling and transportation planning for sensitive commercial loads.", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=700&auto=format&fit=crop" },
  { title: "Pharmaceuticals*", desc: "General logistics support — any specialized compliance per shipper’s requirements.", img: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=700&auto=format&fit=crop" },
  { title: "Construction", desc: "Movement of construction-related materials and equipment.", img: "/company/page_00.jpg" },
  { title: "Industrial Equipment", desc: "Support for machinery, ODC and heavy equipment — as seen in our operations.", img: "/company/page_08.jpg" },
];

export default function Industries() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
        kicker="Industries We Serve"
        title="Logistics that follows your industry’s rhythm."
        subtitle="We support general commercial cargo across sectors — aligning vehicle, handling and timing to your business needs."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => (
            <div key={i.title} className="bg-white border border-slate-100 rounded-[22px] overflow-hidden">
              <div className="h-[180px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={i.img} alt={i.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#0A1931]">{i.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-6">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-6 text-center">* We describe general logistics support only unless pharmaceutical-specific compliance is verified.</p>
        <div className="text-center mt-8">
          <Link href="/contact" className="inline-flex bg-[#DC2626] text-white px-8 py-3.5 rounded-full font-bold text-sm">Discuss Your Industry Requirement →</Link>
        </div>
      </section>
    </>
  );
}
