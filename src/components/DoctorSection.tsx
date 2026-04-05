import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/src/constants';

export default function DoctorSection() {
  return (
    <section className="section-padding space-y-32">
      {/* About Clinic */}
      <div id="about" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop"
              alt="Advanced Dental Equipment"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div>
          <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-widest">About</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
            About <br /> BMD Dental Center
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed font-light">
            BMD Dental Center is a preferred provider with most major insurance companies, and we offer discounts for senior citizens and those without insurance. Our goal is to provide every patient with the care they need.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-bold text-sm transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Meet Doctor */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-widest">Meet Our Doctor</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
            Dr. Anoop Kumar
          </h3>
          <p className="text-slate-500 mb-10 leading-relaxed font-light">
            Dr. Anoop Kumar is a highly skilled cosmetic dentist dedicated to providing exceptional dental care. With years of experience and a passion for smile transformations, he ensures every patient leaves with a confident and healthy smile.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            <Calendar size={18} />
            Book Appointment
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop"
              alt="Dr. Anoop Kumar in Action"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
