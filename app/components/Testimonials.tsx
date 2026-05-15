"use client";

import { motion } from "framer-motion";

export default function Testimonials() {

  const testimonials = [
    {
      quote: "“ZHAGARAM transformed our college cultural into an unforgettable experience.”",
      author: "College Management"
    },
    {
      quote: "“The wedding setup was beyond our expectations. Pure luxury.”",
      author: "Client Review"
    },
    {
      quote: "“Professional execution and stunning presentation.”",
      author: "Corporate Client"
    }
  ];

  return (
    <section id ="testimonials" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Trusted to create unforgettable celebrations with elegance and perfection.
          </p>
        </div>
        
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className="testimonial-card border border-white/10 p-8 flex flex-col justify-between hover:border-brand-orange/50 transition-colors duration-500"
            >
              <div>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-gray-300">
                  {item.quote}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-brand-orange">
                  — {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
