import { Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function InfoCards() {
  const cards = [
    {
      icon: Phone,
      title: 'Call the office',
      content: '+91 97526 98279',
      href: 'tel:+919752698279',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: '147/1, Sindhi Colony, Indore',
      href: 'https://maps.google.com/?q=BMD+Dental+Clinic+Indore',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Clock,
      title: 'Opening Time',
      content: 'Mon-Sat: 10:30am - 9:00pm',
      href: '#contact',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section className="px-6 -mt-12 lg:-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 lg:gap-6">
        {cards.map((card, i) => (
          <motion.a 
            key={i} 
            href={card.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 lg:p-10 rounded-3xl lg:rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-50 flex lg:flex-col items-center lg:text-center gap-4 lg:gap-6 group hover:-translate-y-2 transition-all duration-300 active:scale-95 lg:active:scale-100"
          >
            <div className={`w-12 h-12 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl flex items-center justify-center shrink-0 ${card.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
              <card.icon size={24} className="lg:w-8 lg:h-8" strokeWidth={1.5} />
            </div>
            <div className="text-left lg:text-center">
              <h4 className="text-sm lg:text-lg font-bold text-slate-900 mb-1 lg:mb-2">{card.title}</h4>
              <p className="text-xs lg:text-sm text-slate-500 font-light leading-relaxed">{card.content}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
