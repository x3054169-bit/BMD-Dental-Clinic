import { motion } from 'motion/react';

export default function Welcome() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold text-sm mb-4 uppercase tracking-[0.2em]">Welcome to BMD</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
            Experience The <br /> <span className="text-primary">Art Of Dentistry</span>
          </h3>
          <p className="text-slate-500 mb-10 leading-relaxed font-light text-lg">
            Our experienced and friendly staff is dedicated to your oral health and that of your family. We combine advanced technology with a gentle touch to provide the best dental care in Indore.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary font-bold">10+</div>
              <p className="text-sm font-bold text-slate-700">Years of <br /> Experience</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary font-bold">5k+</div>
              <p className="text-sm font-bold text-slate-700">Happy <br /> Patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10">
            <img
              src="https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop"
              alt="BMD Dental Clinic Interior"
              className="w-full h-auto object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
