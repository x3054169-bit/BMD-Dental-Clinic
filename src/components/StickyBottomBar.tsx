import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

export default function StickyBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 z-[60] px-4 py-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3">
        <a
          href="tel:+919752698279"
          className="flex-1 bg-slate-50 text-slate-900 h-12 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm active:scale-95 transition-transform"
        >
          <Phone size={18} className="text-primary" />
          Call
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-teal-50 text-primary h-12 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] bg-primary text-white h-12 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-teal-500/20"
        >
          <Calendar size={18} />
          Book
        </a>
      </div>
    </div>
  );
}
