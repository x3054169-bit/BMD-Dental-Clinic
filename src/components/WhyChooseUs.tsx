import { motion } from 'motion/react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/src/constants';

export default function WhyChooseUs() {
  const points = [
    'Experienced Dentist',
    'Modern Equipment',
    'Pain-Free Treatment',
    'Transparent Consultation',
    'Cosmetic Expertise',
    'Personalized Service'
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10">
            <img
              src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop"
              alt="Happy Patient Smile"
              className="w-full h-auto object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl -z-10" />
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-50 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trust Score</p>
              <p className="text-lg font-bold text-slate-900">4.9/5.0</p>
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-primary font-bold text-sm mb-4 uppercase tracking-[0.2em]">Why Choose Us</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
            Why Choose <br /> <span className="text-primary">BMD Dental Center?</span>
          </h3>
          <p className="text-slate-500 mb-10 leading-relaxed font-light text-lg">
            BMD Dental Center is available for all of your routine, cosmetic, and protective dentistry needs. We focus on providing a comfortable and stress-free environment.
          </p>
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-12">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-3 lg:gap-4 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <CheckCircle2 size={16} className="lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-bold text-slate-700 leading-tight">{point}</span>
              </div>
            ))}
          </div>
          
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-sm transition-all shadow-xl shadow-teal-500/20 group"
          >
            <Calendar size={20} className="group-hover:scale-110 transition-transform" />
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
