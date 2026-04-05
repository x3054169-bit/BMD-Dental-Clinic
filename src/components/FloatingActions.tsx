import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/src/constants';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              href="tel:+919752698279"
              className="w-14 h-14 bg-white text-primary rounded-full shadow-2xl flex items-center justify-center border border-slate-100 hover:scale-110 transition-transform"
            >
              <Phone size={24} />
            </motion.a>
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <MessageCircle size={32} fill="currentColor" />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
