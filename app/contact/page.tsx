"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

// ─── CONFIG ─────────────────────────────────────────────────────────────────
// After deploying your Apps Script as a Web App, paste the URL below.
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyRXry6-wC_09oaUbb9TGzm2mg3MSJIFzQyCgmVYYFiMGgxBdU1GPujnv4X0lwQ2oJy/exec";
// ─────────────────────────────────────────────────────────────────────────────

type FormData = {
  firstName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDetails: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const EVENT_TYPES = [
  "College Cultural",
  "Symposium",
  "Concert",
  "DJ Night",
  "Corporate Event",
  "Farewell Event",
  "Other",
] as const;

const INITIAL_FORM: FormData = {
  firstName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDetails: "",
};

// ─── Input / Field components ────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <label className="block text-[12px] uppercase tracking-[0.18em] text-[#FF4522] mb-3 font-[family-name:var(--font-oxanium)] font-light">
        {label} <span className="text-white/40">*</span>
      </label>
      {children}
      {/* animated underline */}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF4522] group-focus-within:w-full transition-all duration-300" />
    </div>
  );
}

const inputBase =
  "w-full bg-transparent border-b border-white/20 pb-3 text-white text-sm focus:outline-none transition-colors placeholder:text-white/20 font-[family-name:var(--font-oxanium)] font-light";

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Zhagaram | Contact";
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        // Apps Script requires no-cors for cross-origin POST
        // If you hit a CORS issue, set mode: "no-cors" and handle accordingly
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        throw new Error(json.message || "Submission failed.");
      }
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-inter">
      <Navbar />

      <main className="flex-grow pt-40 pb-32 relative overflow-hidden flex items-center">
        {/* Ambient glow */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#FF4522]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#FF4522]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-between">

            {/* ── Left ── */}
            <motion.div
              className="lg:w-5/12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex items-center gap-2">
               
                <span className="text-[#FF4522] text-[10px] uppercase tracking-[0.2em] font-[family-name:var(--font-oxanium)] font-light">
                  Let's connect
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-oxanium)] text-6xl md:text-7xl lg:text-[80px] font-extralight tracking-tight mb-8 leading-none">
                Contact{" "}
                <span className="text-[#FF4522] font-normal">Us</span>
              </h1>

              <div className="space-y-6 max-w-[500px]">
                <p className="text-white text-lg md:text-[20px] font-light tracking-wide">
                  Let's Create Unforgettable Moments Together.
                </p>
                <p className="text-white/40 text-base font-light leading-relaxed">
                  From college culturals and concerts to corporate gatherings and
                  large-scale celebrations, ZHAGARAM creates immersive event
                  experiences filled with energy, creativity, and elegance.
                </p>
              </div>

              {/* Info strip */}
              <div className="mt-12 space-y-4">
                {[
                  { label: "Response Time", value: "Within 24 hours" },
                  { label: "Location", value: "Coimbatore, Tamil Nadu" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#FF4522] flex-shrink-0" />
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.16em] text-[#FF4522] font-[family-name:var(--font-oxanium)] font-light">
                        {label}
                      </p>
                      <p className="text-white/60 text-sm font-light mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right / Form ── */}
            <motion.div
              className="lg:w-6/12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {/* Success state */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="flex flex-col items-start gap-6 py-16"
                  >
                    <div className="w-14 h-14 rounded-full border border-[#FF4522]/40 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#FF4522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-oxanium)] text-3xl font-light text-white mb-2">
                        We've got your request!
                      </h3>
                      <p className="text-white/40 font-light text-base leading-relaxed max-w-md">
                        A confirmation has been sent to your email. Our team will
                        reach out within 24 hours. Let's make something incredible.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[#FF4522] text-[12px] font-mono uppercase tracking-[0.16em] border-b border-[#FF4522]/40 pb-0.5 hover:border-[#FF4522] transition-colors"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-4"
                  >
                    {/* First Name */}
                    <Field label="First Name">
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className={inputBase}
                        required
                      />
                    </Field>

                    {/* Email */}
                    <Field label="Email Address">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={inputBase}
                        required
                      />
                    </Field>

                    {/* Phone */}
                    <Field label="Phone Number">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={inputBase}
                        required
                      />
                    </Field>

                    {/* Event Type */}
                    <Field label="Event Type">
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className={`${inputBase} cursor-pointer`}
                        required
                      >
                        <option value="" disabled className="bg-[#0a0a0a] text-white/30">
                          Select event type
                        </option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-[#0a0a0a] text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {/* Event Details */}
                    <div className="md:col-span-2 group relative">
                      <label className="block text-[12px] uppercase tracking-[0.18em] text-[#FF4522] mb-3 font-[family-name:var(--font-oxanium)] font-light">
                        Event Details <span className="text-white/40">*</span>
                      </label>
                      <textarea
                        name="eventDetails"
                        value={form.eventDetails}
                        onChange={handleChange}
                        placeholder='"Tell us about your event vision, audience size, requirements, and preferred experience."'
                        className={`${inputBase} resize-none h-20 placeholder:text-white/20 font-light text-[13px]`}
                        required
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF4522] group-focus-within:w-full transition-all duration-300" />
                    </div>

                    {/* Error message */}
                    {status === "error" && errorMsg && (
                      <motion.div
                        className="md:col-span-2 flex items-center gap-2"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <p className="text-red-400 text-xs font-mono">{errorMsg}</p>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <div className="md:col-span-2 mt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="button-custom group px-8 py-[14px] font-[family-name:var(--font-oxanium)] font-light uppercase tracking-[0.12em] text-[12px] text-white relative flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <div className="button_background bg-[#FF4522] group-hover:bg-[#e03d1e] transition-colors"></div>
                        <span className="button_text">
                          <span className="button_span flex items-center gap-2">
                            {status === "loading" ? (
                              <>
                                <svg
                                  className="animate-spin w-4 h-4"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12" cy="12" r="10"
                                    stroke="white" strokeWidth="3"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="white"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                  />
                                </svg>
                                Sending…
                              </>
                            ) : (
                              "Plan Your Event"
                            )}
                          </span>
                        </span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}