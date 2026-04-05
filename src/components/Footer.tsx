import { Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 lg:pt-24 pb-32 lg:pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-20">
        <div className="lg:col-span-1 text-center lg:text-left">
          <a href="#" className="flex items-center justify-center lg:justify-start gap-2 mb-6 lg:mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">
              BMD <span className="text-primary">Dental</span>
            </span>
          </a>
          <p className="text-slate-400 text-xs lg:text-sm leading-relaxed mb-8 font-light max-w-sm mx-auto lg:mx-0">
            Providing premium dental care and cosmetic transformations in Indore. Your smile is our priority. We use modern equipment and pain-free treatments.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 lg:mb-8">Quick Link</h4>
          <ul className="space-y-4 text-slate-400 text-xs lg:text-sm font-light">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 lg:mb-8">Legal</h4>
          <ul className="space-y-4 text-slate-400 text-xs lg:text-sm font-light">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Accessibility Notice</a></li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 lg:mb-8 text-white">Opening Time</h4>
          <ul className="space-y-4 text-slate-400 text-xs lg:text-sm font-light">
            <li className="flex flex-col lg:flex-row lg:justify-between border-b border-slate-800 pb-2 gap-1"><span>Mon - Sat:</span> <span className="text-white font-bold">10:30am - 9:00pm</span></li>
            <li className="flex flex-col lg:flex-row lg:justify-between border-b border-slate-800 pb-2 gap-1"><span>Sun:</span> <span className="text-white font-bold">11:00am - 3:00pm</span></li>
          </ul>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 lg:mt-10 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-teal-500/10 active:scale-95 lg:active:scale-100"
          >
            <Calendar size={18} />
            Book Appointment
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest font-bold text-center">
        <p>Dental Care © 2026. All Rights Reserved</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}
