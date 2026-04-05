import { CheckCircle2, Phone } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="px-6 mb-24">
      <div className="max-w-7xl mx-auto bg-white border border-teal-100 rounded-[40px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-teal-500/5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-md relative z-10">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
            We're keeping our <br /> <span className="text-primary underline decoration-teal-100 underline-offset-8">community safe</span>
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed font-light mb-8">
            Your health and safety are our top priorities. We follow strict sterilization protocols and safety measures.
          </p>
          <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-100 w-fit">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Text us your questions</p>
              <p className="text-sm font-bold text-primary">+91 97526 98279</p>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 w-full lg:w-auto relative z-10">
          {[
            'Health checks for Covid-19',
            'Medically sterilized equipment',
            'Contactless check-in',
            'Enhanced PPE'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white px-8 py-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-sm font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
