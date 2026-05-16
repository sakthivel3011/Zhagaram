"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import logoIcon from "@/app/logo/icon.png";

// ─── Newsletter Apps Script URL ─────────────────────────────
const NEWSLETTER_URL = "https://script.google.com/macros/s/AKfycbzwRDFMpAtc1qvMM12NlkBWML2-R3ONuKlXLEDMZe_3oDfngIpU1NQMz_L2fx5U__ql/exec";
// ────────────────────────────────────────────────────────────

type NLStatus = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const [nlEmail, setNlEmail]   = useState("");
  const [nlStatus, setNlStatus] = useState<NLStatus>("idle");
  const [nlMsg, setNlMsg]       = useState("");
  const isSubmitting             = useRef(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();

    if (isSubmitting.current) return;
    if (!nlEmail || !nlEmail.includes("@")) {
      setNlMsg("Please enter a valid email.");
      setNlStatus("error");
      return;
    }

    isSubmitting.current = true;
    setNlStatus("loading");
    setNlMsg("");

    try {
      const fd = new FormData();
      fd.append("email", nlEmail);

      await fetch(NEWSLETTER_URL, {
        method: "POST",
        mode:   "no-cors",   // avoids CORS preflight block
        body:   fd,
      });

      // no-cors → opaque response → completed fetch = success
      setNlStatus("success");
      setNlEmail("");
      setNlMsg("You're subscribed!");
    } catch {
      setNlMsg("Something went wrong. Try again.");
      setNlStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  }

  return (
    <footer className="bg-black pt-32 pb-12 relative border-t border-brand-orange/30 overflow-hidden">
      {/* Top Frame Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-12 md:gap-24 mb-16 md:mb-24">

          {/* Logo Row */}
          <div>
            <Link href="/" className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-6 mb-6 text-white hover:text-white transition-colors">
              <span className="font-[family-name:var(--font-michroma)] text-2xl md:text-6xl lg:text-[80px] font-bold tracking-[0.1em] uppercase">Zhagaram</span>
              <Image src={logoIcon} alt="Zhagaram Logo" width={100} height={100} className="w-10 md:w-24 h-10 md:h-24 object-contain" quality={100} />
            </Link>
            <p className="text-xl md:text-[22px] text-gray-400 font-outfit font-light tracking-wide text-center md:text-left">
              Rooted In Culture, Styled In Elegance.
            </p>
          </div>

          {/* Columns Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 font-[family-name:var(--font-oxanium)]">

            {/* Services */}
            <div className="lg:col-span-3 text-center md:text-left">
              <h4 className="text-brand-orange uppercase text-xs font-light tracking-widest mb-8">Services</h4>
              <ul className="flex flex-col items-center md:items-start gap-6 text-white uppercase text-sm font-medium tracking-wider">
                <li><Link href="#statement" onClick={(e) => handleScrollTo(e, "statement")} className="text-link hover:text-white transition-colors"><span className="text-link_span">College Culturals</span></Link></li>
                <li><Link href="#statement" onClick={(e) => handleScrollTo(e, "statement")} className="text-link hover:text-white transition-colors"><span className="text-link_span">Corporate Events</span></Link></li>
                <li><Link href="#statement" onClick={(e) => handleScrollTo(e, "statement")} className="text-link hover:text-white transition-colors"><span className="text-link_span">Concerts &amp; Festivals</span></Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-3 text-center md:text-left">
              <h4 className="text-brand-orange uppercase text-xs font-light tracking-widest mb-8">Company</h4>
              <ul className="flex flex-col items-center md:items-start gap-6 text-white uppercase text-sm font-medium tracking-wider">
                <li><Link href="/about" className="text-link hover:text-white transition-colors"><span className="text-link_span">About Us</span></Link></li>
                <li><Link href="/contact" className="text-link hover:text-white transition-colors"><span className="text-link_span">Contact</span></Link></li>
                <li><Link href="#testimonials" onClick={(e) => handleScrollTo(e, "testimonials")} className="text-link hover:text-white transition-colors"><span className="text-link_span">Testimonials</span></Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-3 text-center md:text-left">
              <h4 className="text-brand-orange uppercase text-xs font-light tracking-widest mb-8">Contact Us</h4>
              <ul className="flex flex-col items-center md:items-start gap-6 text-white text-sm font-medium tracking-wider">
                <li><a href="mailto:hello@zhagaram.com" className="hover:text-brand-orange transition-colors">hello@zhagaram.com</a></li>
                <li><a href="tel:+91XXXXX XXXXX" className="hover:text-brand-orange transition-colors">+91 XXXXX XXXXX</a></li>
                <li className="text-gray-300">Chennai, Tamil Nadu</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3 text-center md:text-left">
              <h4 className="text-brand-orange uppercase text-xs font-light tracking-widest mb-8">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                The latest news, articles, and resources, sent to your inbox.
              </p>

              {nlStatus === "success" ? (
                /* ── Success state — same footer width, no layout shift ── */
                <div className="flex items-center justify-center md:justify-start gap-2 max-w-md mx-auto md:mx-0">
                  <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                  <p className="text-brand-orange text-xs uppercase tracking-widest font-[family-name:var(--font-oxanium)]">
                    {nlMsg}
                  </p>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleNewsletter} className="flex w-full max-w-md mx-auto md:mx-0">
                    <input
                      type="email"
                      value={nlEmail}
                      onChange={(e) => setNlEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL"
                      disabled={nlStatus === "loading"}
                      className="bg-[#1c1c1c] text-white px-6 py-2 w-full outline-none text-sm placeholder:text-gray-500 uppercase border-none focus:ring-1 focus:ring-brand-orange transition-shadow disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={nlStatus === "loading"}
                      className="button-custom group bg-brand-orange text-black px-6 py-2 uppercase text-sm font-medium transition-colors border border-transparent whitespace-nowrap flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <div className="button_background bg-brand-orange group-hover:bg-orange-600 transition-colors"></div>
                      <span className="button_text">
                        <span className="button_span">
                          {nlStatus === "loading" ? "…" : "SUBMIT"}
                        </span>
                      </span>
                    </button>
                  </form>

                  {/* Error message */}
                  {nlStatus === "error" && nlMsg && (
                    <p className="text-red-400 text-xs mt-2 font-[family-name:var(--font-oxanium)] tracking-wide">
                      {nlMsg}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar — identical to original */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-xs uppercase tracking-widest gap-4 font-[family-name:var(--font-oxanium)]">
          <div className="flex gap-6">
            <a href="#" className="text-link hover:text-white transition-colors"><span className="text-link_span">X/Twitter</span></a>
            <a href="#" className="text-link hover:text-white transition-colors"><span className="text-link_span">LinkedIn</span></a>
          </div>
          <div className="text-center">
            © {new Date().getFullYear()} Zhagaram | Dev by <a href="https://updone.vercel.app" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline underline-offset-2 transition-all">Updone</a>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-link hover:text-white transition-colors"><span className="text-link_span">Privacy</span></Link>
            <Link href="/terms" className="text-link hover:text-white transition-colors"><span className="text-link_span">Terms of use</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}