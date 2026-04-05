import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/src/constants';

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-12 px-4 lg:px-6">
      <div className="wide-container soft-teal-gradient relative overflow-hidden min-h-[70vh] lg:min-h-[600px] flex items-center">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] lg:max-w-[500px]">
              <div className="rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop"
                  alt="Dr. Anoop Kumar - BMD Dental Clinic"
                  className="w-full h-auto object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating elements like in reference */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-primary font-bold text-[10px] lg:text-sm uppercase tracking-[0.2em] mb-4">
              Perfect Solutions For Your Teeth
            </p>
            
            <h1 className="text-3xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.2] lg:leading-[1] mb-6 lg:mb-8 tracking-tight">
              <span className="lg:hidden">Comfortable, expert <br /> <span className="text-gradient italic">dental care</span> in Indore.</span>
              <span className="hidden lg:inline">Feel The Sparkle <br /> In <span className="text-gradient italic">Your Smile</span> Again</span>
            </h1>
            
            <p className="text-sm lg:text-xl text-slate-500 mb-8 lg:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              <span className="lg:hidden">Experience premium dental care where comfort meets expertise.</span>
              <span className="hidden lg:inline">Experience premium dental care where comfort meets expertise. We specialize in cosmetic dentistry to give you the smile you've always dreamed of.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-base lg:text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-teal-500/30 group active:scale-95"
              >
                <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                Book Appointment
              </a>
              <a
                href="#contact"
                className="hidden sm:flex bg-white border border-slate-200 hover:border-primary text-slate-900 px-10 py-5 rounded-full font-bold text-lg transition-all items-center justify-center hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
