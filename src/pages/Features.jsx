import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto w-full min-h-[70vh]">
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">{t('features.title')}</h2>
        <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {['coffee', 'tarot', 'palm', 'dreams', 'horoscope'].map((feature, idx) => {
          const icons = ['coffee', 'style', 'pan_tool', 'bedtime', 'star'];
          return (
            <div key={feature} className="glass-card p-8 rounded-2xl flex flex-col gap-4 gold-glow transition-all group">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:text-gold transition-colors">{icons[idx]}</span>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{t(`features.${feature}.title`)}</h3>
              </div>
              <p className="text-slate-400 text-sm">{t(`features.${feature}.sub`)}</p>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Features;
