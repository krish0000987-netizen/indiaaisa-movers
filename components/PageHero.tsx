type Props = {
  image: string;
  kicker?: string;
  title: string;
  subtitle: string;
  extra?: React.ReactNode;
};

export default function PageHero({ image, kicker, title, subtitle, extra }: Props) {
  return (
    <div className="bg-[#061227]">
      <div className="max-w-[1420px] mx-auto">
        {/* Desktop */}
        <div className="hidden lg:block relative h-[420px] overflow-hidden rounded-b-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061227]/90 via-[#061227]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061227]/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-14 max-w-[720px]">
            {kicker && <div className="inline-flex bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 w-fit">{kicker}</div>}
            <h1 className="font-display font-black text-white text-[44px] leading-[1] tracking-tight">{title}</h1>
            <p className="mt-4 text-white/80 text-[16px] leading-7 max-w-[560px]">{subtitle}</p>
            {extra && <div className="mt-6">{extra}</div>}
          </div>
        </div>
        {/* Mobile: image clean + text below */}
        <div className="lg:hidden">
          <div className="h-[220px] sm:h-[260px] overflow-hidden bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={title} className="w-full h-full object-cover object-center" loading="eager" />
          </div>
          <div className="bg-white px-5 sm:px-6 py-6">
            {kicker && <div className="inline-flex bg-slate-900 text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">{kicker}</div>}
            <h1 className="font-display font-black text-[#0A1931] text-[24px] sm:text-[26px] leading-[1.1]">{title}</h1>
            <p className="mt-3 text-slate-600 leading-6 text-[14px] sm:text-[15px]">{subtitle}</p>
            {extra && <div className="mt-5">{extra}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
