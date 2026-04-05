import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Teeth Cleaning',
    desc: 'Keep your teeth & gums healthy with routine oral care.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Dental Fillings',
    desc: 'Clear aligners that will help you have straight teeth faster.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop'
  },
  {
    title: 'Root Canal',
    desc: 'Get the best permanent solution for missing teeth.',
    image: 'https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop'
  },
  {
    title: 'Smile Makeover',
    desc: 'The Velscope oral cancer screening system is used annually.',
    image: 'https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold text-sm mb-4 uppercase tracking-[0.2em]">Explore Our Top Services</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1]">
              Creating Beautiful Smiles In <br /> <span className="text-primary">Indore For Over 10 Years</span>
            </h3>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-sm transition-all shrink-0 shadow-xl shadow-slate-200">
            View All Services
          </button>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-light p-6 lg:p-8 rounded-3xl lg:rounded-[40px] group hover:bg-white hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-transparent hover:border-teal-100 min-w-[280px] lg:min-w-0 snap-center"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl overflow-hidden mb-6 lg:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-light mb-6">
                {service.desc}
              </p>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Swipe to explore</span>
        </div>
      </div>
    </section>
  );
}
