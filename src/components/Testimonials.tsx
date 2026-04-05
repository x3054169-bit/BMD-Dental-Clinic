import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Had A Great Experience Getting My Teeth Cleaned Today, And Some Good Advice Going Forward. I Love BMD Dental And All The People Who Work There.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    text: "Had A Great Experience Getting My Teeth Cleaned Today, And Some Good Advice Going Forward. I Love BMD Dental And All The People Who Work There.",
    rating: 5,
  },
  {
    name: "Amit Jain",
    text: "Had A Great Experience Getting My Teeth Cleaned Today, And Some Good Advice Going Forward. I Love BMD Dental And All The People Who Work There.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[#1e293b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold text-lg mb-4 uppercase tracking-widest">What Our Patients Say</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Our Patients Send Us Bunch Of Smiles <br /> And We Love Them.</h3>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 lg:p-8 rounded-3xl lg:rounded-[32px] text-slate-900 relative shadow-xl min-w-[280px] lg:min-w-0 snap-center"
            >
              <Quote className="absolute top-6 right-8 text-slate-100" size={40} fill="currentColor" />
              <p className="text-slate-600 text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light italic">
                <span className="lg:hidden">"{t.text.substring(0, 80)}..."</span>
                <span className="hidden lg:inline">"{t.text}"</span>
              </p>
              <div className="flex items-center gap-3 lg:gap-4 border-t border-slate-100 pt-4 lg:pt-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs lg:text-sm">{t.name[0]}</div>
                <div>
                  <p className="font-bold text-xs lg:text-sm">{t.name}</p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Swipe to read more</span>
        </div>
      </div>
    </section>
  );
}
