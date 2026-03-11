import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto w-full min-h-[70vh]">
      <div className="text-center mb-20">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
        <p className="text-slate-400">{t('howItWorks.subtitle')}</p>
      </div>
      
      <div className="relative grid md:grid-cols-3 gap-16">
        {/* Golden Line Background (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"></div>
        
        <div className="relative flex flex-col items-center text-center gap-6">
          <div className="size-20 rounded-full bg-primary/20 border-2 border-gold flex items-center justify-center text-gold font-black text-2xl z-10 glass-card">1</div>
          <div>
            <h4 className="text-white text-xl font-bold mb-2">{t('howItWorks.step1.title')}</h4>
            <p className="text-slate-400 text-sm whitespace-pre-line">{t('howItWorks.step1.desc')}</p>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center gap-6">
          <div className="size-20 rounded-full bg-primary/20 border-2 border-gold flex items-center justify-center text-gold font-black text-2xl z-10 glass-card">2</div>
          <div>
            <h4 className="text-white text-xl font-bold mb-2">{t('howItWorks.step2.title')}</h4>
            <p className="text-slate-400 text-sm whitespace-pre-line">{t('howItWorks.step2.desc')}</p>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center gap-6">
          <div className="size-20 rounded-full bg-primary/20 border-2 border-gold flex items-center justify-center text-gold font-black text-2xl z-10 glass-card">3</div>
          <div>
            <h4 className="text-white text-xl font-bold mb-2">{t('howItWorks.step3.title')}</h4>
            <p className="text-slate-400 text-sm whitespace-pre-line">{t('howItWorks.step3.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
