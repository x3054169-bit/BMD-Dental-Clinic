import { Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/src/constants';

export default function CTABanner() {
  return (
    <section className="px-6 mb-24">
      <div className="max-w-7xl mx-auto bg-accent rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/30">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
            Get Your Teeth Cleaned <br /> <span className="text-slate-900/10 mix-blend-overlay">It's Easy And Affordable</span>
          </h3>
          <p className="text-white/90 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            We Are Available For All Of Your Routine, Cosmetic, And Protective Dentistry Needs!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="tel:+919752698279"
              className="text-white font-bold text-sm border-b-2 border-white/20 hover:border-white transition-all pb-1 tracking-widest uppercase"
            >
              Call Us: +91 97526 98279
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent hover:bg-slate-50 px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              <Calendar size={22} />
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
