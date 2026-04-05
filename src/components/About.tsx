import { motion } from 'motion/react';
import { Sparkles, Heart, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-1 lg:order-1">
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="space-y-3 lg:space-y-4">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop"
                alt="Dental Tools"
                className="rounded-2xl lg:rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-primary p-4 lg:p-6 rounded-2xl lg:rounded-3xl text-white">
                <p className="text-2xl lg:text-4xl font-bold mb-1">10+</p>
                <p className="text-[10px] lg:text-sm opacity-90 uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-4 pt-6 lg:pt-8">
              <div className="bg-teal-50 p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-teal-100">
                <Sparkles className="text-primary mb-2 lg:mb-3" size={24} />
                <p className="font-bold text-xs lg:text-base text-slate-900">Cosmetic Experts</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop"
                alt="Dental X-ray"
                className="rounded-2xl lg:rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-2 text-center lg:text-left">
          <h2 className="text-primary font-bold text-xs lg:text-lg mb-3 lg:mb-4 uppercase tracking-[0.2em]">About BMD Dental</h2>
          <h3 className="text-2xl lg:text-5xl font-display font-bold text-slate-900 mb-4 lg:mb-6 leading-tight">
            Your Trusted Partner for <br className="hidden lg:block" /> <span className="text-primary">Healthy Smiles</span>
          </h3>
          <p className="text-slate-600 text-sm lg:text-lg mb-6 lg:mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
            Led by <strong>Dr. Anoop Kumar</strong>, BMD Dental Clinic is a premier destination for cosmetic and general dentistry in Indore. We prioritize your comfort and results.
          </p>
          
          <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10 text-left">
            {[
              { icon: Heart, title: 'Patient-Focused Care', desc: 'We prioritize your comfort and detailed consultation.' },
              { icon: Users, title: 'LGBTQ+ Friendly', desc: 'A safe, inclusive space for everyone in our community.' },
              { icon: CheckCircle2, title: 'Modern Equipment', desc: 'Using the latest technology for precise treatments.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 lg:gap-4 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <item.icon size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm lg:text-base mb-0.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs lg:text-sm font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
