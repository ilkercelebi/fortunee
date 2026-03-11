import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  const faqs = [
    { q: 'q1', a: 'a1' },
    { q: 'q2', a: 'a2' },
    { q: 'q3', a: 'a3' }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          {t('contactPage.header.title')}
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          {t('contactPage.header.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-xl shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              {t('contactPage.form.title')}
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">{t('contactPage.form.nameLabel')}</label>
                  <input type="text" placeholder={t('contactPage.form.namePlaceholder')} className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">{t('contactPage.form.emailLabel')}</label>
                  <input type="email" placeholder={t('contactPage.form.emailPlaceholder')} className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">{t('contactPage.form.subjectLabel')}</label>
                <select className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                  {t('contactPage.form.subjects', { returnObjects: true }).map((subj, idx) => (
                    <option key={idx} className="bg-background-dark text-white">{subj}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">{t('contactPage.form.messageLabel')}</label>
                <textarea rows="4" placeholder={t('contactPage.form.messagePlaceholder')} className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary outline-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-gold hover:opacity-90 text-background-dark font-black py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-gold/20 flex justify-center items-center gap-2 uppercase tracking-wider">
                {t('contactPage.form.submit')}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Info Card 1: Email */}
          <div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-gold/40 transition-colors">
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">{t('contactPage.info.emailTitle')}</h4>
              <p className="text-slate-400">support@fortuneai.com</p>
              <p className="text-slate-400">hello@fortuneai.com</p>
            </div>
          </div>

          {/* Info Card 2: Address */}
          <div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-gold/40 transition-colors">
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">{t('contactPage.info.addressTitle')}</h4>
              <p className="text-slate-400">{t('contactPage.info.address1')}</p>
              <p className="text-slate-400">{t('contactPage.info.address2')}</p>
            </div>
          </div>

          {/* Info Card 3: Response Time */}
          <div className="glass-card p-6 rounded-xl flex items-start gap-4 border-l-4 border-l-gold">
            <div className="bg-gold/10 p-3 rounded-lg text-gold">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gold">{t('contactPage.info.timeTitle')}</h4>
              <p className="text-slate-300 font-medium">{t('contactPage.info.time1')}</p>
              <p className="text-xs text-slate-500 mt-1">{t('contactPage.info.time2')}</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-48 rounded-xl overflow-hidden glass-card relative group">
            <img alt="Map Location" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQnS1RYFrRTToZMnUfpjbcnDxALEoAMqglx1MvsYHGCRcfQuR3CjZpuHCJ-5WBQ7RbYLc54mV9dL2mmhz8dgUkqkOn9cuUIJSiGOLi7aciOTvNUxHs5nHNaaIrwjJ-j_nCY46IYdWkvoQhkzGInaaAFU60ex02ZTBUi01oG3doHfQe8XnGwV7e_ZsHpp0_-jWaJP8hSwPAmI9Bj-R1pbownYZ0WwNT6X-20iE9nva-G7tm1VPU9qk4uM12yFGIn-d2rNkajedmToc"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background-dark/80 px-4 py-2 rounded-full text-xs font-bold border border-primary/30 text-white">
                {t('contactPage.info.mapBtn')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-3xl font-bold mb-8 text-center">{t('contactPage.faq.title')}</h3>
        
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card rounded-lg overflow-hidden border border-primary/10">
            <button 
              onClick={() => toggleFaq(idx)}
              className="w-full p-5 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
            >
              <span className="font-bold">{t(`contactPage.faq.${faq.q}`)}</span>
              <span className="material-symbols-outlined text-primary">
                {openFaq === idx ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            <div className={`px-5 text-slate-400 text-sm leading-relaxed border-t border-primary/5 pt-4 transition-all duration-300 ${openFaq === idx ? 'pb-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden border-t-0'}`}>
              {t(`contactPage.faq.${faq.a}`)}
            </div>
          </div>
        ))}

      </div>
    </main>
  );
};

export default Contact;
