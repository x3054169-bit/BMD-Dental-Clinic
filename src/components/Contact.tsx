import { getWhatsAppLink } from '@/src/constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-widest">Need Directions?</h2>
        <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">We'd Be Happy To Help You Find Your Way</h3>
        <p className="text-primary font-bold text-sm">Contact Us: +91 97526 98279</p>
      </div>
      
      <div className="wide-container relative h-[300px] lg:h-[500px] shadow-2xl border-4 lg:border-8 border-white">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.763967518402!2d75.8436209871582!3d22.7025444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd45ecf0a30f%3A0x8e0a2f02973f4724!2sBMD%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1775374019664!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Mobile Map Button */}
        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-6">
          <a
            href="https://maps.google.com/?q=BMD+Dental+Clinic+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 border border-slate-100 active:scale-95 transition-transform"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Floating info card on map like in reference */}
        <div className="absolute top-10 left-10 hidden lg:block bg-primary p-8 rounded-[32px] text-white shadow-2xl max-w-sm">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Call the office</p>
              <p className="font-bold">+91 97526 98279</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Office Location</p>
              <p className="font-bold text-sm">147/1, Bk Sindhi Colony, Indore, MP 452001</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Opening Time</p>
              <p className="font-bold text-sm">Mon-Sat: 10:30am - 9:00pm</p>
              <p className="font-bold text-sm">Sun: 11:00am - 3:00pm</p>
            </div>
          </div>
          <a 
            href={getWhatsAppLink()} 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block bg-white text-primary text-center py-3 rounded-full font-bold text-xs uppercase tracking-widest"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
