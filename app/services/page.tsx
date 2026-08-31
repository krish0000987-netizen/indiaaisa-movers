import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Services" };

const services = [
  {
    title: "Full Truck Load (FTL)",
    desc: "Dedicated vehicle capacity for large or time-sensitive shipments requiring direct movement.",
    img: "/company/page_00.jpg",
    href: "/ftl",
    points: ["Dedicated capacity", "Direct movement", "Reduced handling", "Better control"],
    use: "Large shipments, urgent dispatches, ODC loads",
  },
  {
    title: "Part Truck Load (PTL) & Cargo",
    desc: "Consolidated transportation for medium-sized and commercial cargo without needing a full vehicle.",
    img: "/company/page_02.jpg",
    href: "/ptl-cargo",
    points: ["Cost-efficient", "Shared capacity", "Regular cargo", "Flexible volumes"],
    use: "Medium shipments, regular commercial cargo, regional distribution",
  },
  {
    title: "Cargo Transportation",
    desc: "Professional movement of commercial goods with attention to securing and handling.",
    img: "/company/page_05.jpg",
    href: "/ptl-cargo",
    points: ["Secure handling", "Coordinated pickup", "Transit planning", "Delivery follow-up"],
    use: "Industrial goods, machinery, general commercial cargo",
  },
  {
    title: "Warehousing & Distribution",
    desc: "Storage and onward distribution support where applicable — coordinated via partner facilities.",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=900&auto=format&fit=crop",
    href: "/warehousing",
    points: ["Inventory coordination", "Organized dispatch", "Distribution links", "Transport integration"],
    use: "Businesses needing staging, storage & last-mile linkage",
  },
  {
    title: "Customized Logistics",
    desc: "Tailored solutions mapped to your pickup, delivery, cargo profile and timelines.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
    href: "/contact",
    points: ["Route planning", "Vehicle matching", "Timeline alignment", "Special handling"],
    use: "Special dimensions, multi-point deliveries, recurring contracts",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
        kicker="Our Services"
        title="Transport and logistics, coordinated end-to-end."
        subtitle="From enquiry to delivery — FTL, PTL, cargo and warehousing coordination tailored to your business."
      />

      <section className="max-w-[1420px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm">
              <div className="h-[220px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-bold text-[#0A1931] text-lg">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-6">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span key={p} className="text-xs font-semibold bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full text-slate-700">{p}</span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4"><strong className="text-slate-600">Typical use:</strong> {s.use}</p>
                <Link href={s.href} className="mt-5 inline-flex bg-[#0A1931] text-white px-5 py-2.5 rounded-full text-sm font-bold">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
