"use client";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <Header onQuote={() => setQuoteOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer onQuote={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      {/* Floating call on mobile */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex gap-3">
        <a href="tel:+919000070930" className="flex-1 bg-[#0A1931] text-white py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 1.93 4.28 2 2 0 0 1 3.91 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" /></svg>
          Call
        </a>
        <button onClick={() => setQuoteOpen(true)} className="flex-1 bg-[#DC2626] text-white py-3.5 rounded-full font-bold text-sm shadow-xl">Get Quote</button>
      </div>
    </>
  );
}
