"use client";

import { motion } from "framer-motion";

export default function News() {

  const articles = [
    {
      title: "What Does “Private” Cloud Actually Mean?",
      author: "Patrick Wohlschlegel",
      desc: "Explore why private cloud is evolving from simple isolation to a model of determinism and control, especially for high-stakes AI and data-intensive workloads.",
      image: "https://cdn.prod.website-files.com/690b5b94afa472cd26c5fb01/69fb6ed93a9bc69217bfff1c_blog_image_thumbnail_ai_education_template_10.png"
    },
    {
      title: "AI Infrastructure: The Synchronized Capacity Problem",
      author: "Dr. Manesh Patel",
      desc: "The AI industry isn't short of GPUs; it's short of synchronized capacity. Discover why parallel execution is the only way to beat the 10-year infrastructure bottleneck.",
      image: "https://cdn.prod.website-files.com/690b5b94afa472cd26c5fb01/69f23a42368f719b8d8e4078_featured_image_1.png"
    },
    {
      title: "Elevating Experiences: The Art of Luxury Design",
      author: "Adrian Matei",
      desc: "How do we create spaces that inspire? Explore the design philosophy behind Zhagaram's most iconic events and the meticulous attention to detail that defines us.",
      image: "https://cdn.prod.website-files.com/690b5b94afa472cd26c5fb01/69ea6d324cca9b5bf0295393_Screenshot%202026-04-23%20at%2012.01.53.png"
    }
  ];

  return (
    <section className="py-24 border-t border-white/10 bg-black relative">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-light">Check Our Latest News</h2>
         
        </div>
        
        <div className="news-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className="news-card group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 border border-white/10">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex gap-2 text-xs text-gray-500 uppercase tracking-wider mb-3">
                <span>Author:</span>
                <span className="text-gray-400">{article.author}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-brand-orange transition-colors">
                {article.title}
              </h3>
              <div className="text-link text-brand-orange uppercase font-bold tracking-widest text-xs">
                <span className="text-link_span">Read More</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Frame Lines */}
      {/* Horizontal lines */}
      <div className="absolute top-[64px] left-0 right-0 h-[1px] bg-white/10 pointer-events-none"></div>
      <div className="absolute bottom-[64px] left-0 right-0 h-[1px] bg-white/10 pointer-events-none"></div>
      
      {/* Vertical lines */}
      
      
      {/* Decorative crosses at intersections */}
      <div className="absolute top-[64px] left-6 md:left-12 lg:left-24 pointer-events-none text-white" style={{ transform: 'translate(-50%, -50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>
      
      <div className="absolute top-[64px] right-6 md:right-12 lg:right-24 pointer-events-none text-white" style={{ transform: 'translate(50%, -50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>
      
      <div className="absolute bottom-[64px] left-6 md:left-12 lg:left-24 pointer-events-none text-white" style={{ transform: 'translate(-50%, 50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>
      
      <div className="absolute bottom-[64px] right-6 md:right-12 lg:right-24 pointer-events-none text-white" style={{ transform: 'translate(50%, 50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>
    </section>
  );
}
