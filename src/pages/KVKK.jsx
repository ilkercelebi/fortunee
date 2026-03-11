import { useTranslation } from 'react-i18next';

const KVKK = () => {
  const { t } = useTranslation();

  return (
    <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-12 min-h-[70vh]">
      {/* Hero Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          {t('kvkkPage.header.title')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {t('kvkkPage.header.subtitle')}
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="glass-card rounded-xl p-5 flex items-center gap-4 border-l-4 border-gold">
          <div className="bg-gold/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-gold">verified_user</span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100">{t('kvkkPage.badges.kvkk')}</h3>
            <p className="text-xs text-slate-500">{t('kvkkPage.badges.kvkkSub')}</p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-5 flex items-center gap-4 border-l-4 border-primary">
          <div className="bg-primary/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-primary">gavel</span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100">{t('kvkkPage.badges.gdpr')}</h3>
            <p className="text-xs text-slate-500">{t('kvkkPage.badges.gdprSub')}</p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-5 flex items-center gap-4 border-l-4 border-primary">
          <div className="bg-primary/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-primary">enhanced_encryption</span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100">{t('kvkkPage.badges.ssl')}</h3>
            <p className="text-xs text-slate-500">{t('kvkkPage.badges.sslSub')}</p>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-2xl p-6 md:p-10 space-y-10 shadow-2xl">
        {/* Section: Data Controller */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-gold">business</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('kvkkPage.controller.title')}
            </h3>
          </div>
          <div className="pl-4 border-l-2 border-gold/50 py-1">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t('kvkkPage.controller.content')}
            </p>
          </div>
        </section>

        {/* Section: Data Types Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">list_alt</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('kvkkPage.processedData.title')}
            </h3>
          </div>
          <div className="overflow-x-auto rounded-xl border border-primary/20">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-4 py-3 font-semibold text-primary">{t('kvkkPage.processedData.col1')}</th>
                  <th className="px-4 py-3 font-semibold text-primary">{t('kvkkPage.processedData.col2')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                <tr className="hover:bg-primary/5">
                  <td className="px-4 py-3 font-medium">{t('kvkkPage.processedData.rows.identity.cat')}</td>
                  <td className="px-4 py-3 text-slate-400">{t('kvkkPage.processedData.rows.identity.types')}</td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="px-4 py-3 font-medium">{t('kvkkPage.processedData.rows.contact.cat')}</td>
                  <td className="px-4 py-3 text-slate-400">{t('kvkkPage.processedData.rows.contact.types')}</td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="px-4 py-3 font-medium">{t('kvkkPage.processedData.rows.usage.cat')}</td>
                  <td className="px-4 py-3 text-slate-400">{t('kvkkPage.processedData.rows.usage.types')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Accordion Sections */}
        <div className="space-y-4">
          <details className="group glass-card rounded-xl transition-all duration-300">
            <summary className="flex cursor-pointer items-center justify-between p-5 list-none">
              <span className="font-bold flex items-center gap-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">settings_suggest</span>
                {t('kvkkPage.methods.title')}
              </span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 space-y-3">
              <p>{t('kvkkPage.methods.content')}</p>
            </div>
          </details>

          <details className="group glass-card rounded-xl transition-all duration-300">
            <summary className="flex cursor-pointer items-center justify-between p-5 list-none">
              <span className="font-bold flex items-center gap-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">share</span>
                {t('kvkkPage.transfers.title')}
              </span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400">
              <p>{t('kvkkPage.transfers.content')}</p>
            </div>
          </details>
        </div>

        {/* Highlighted Rights Section */}
        <section className="bg-primary/10 rounded-2xl p-6 border border-primary/30 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">shield_person</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('kvkkPage.rights.title')}
              </h3>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
              {t('kvkkPage.rights.list', { returnObjects: true })?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-gold text-sm mt-1">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="bg-gold text-background-dark font-bold px-6 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                {t('kvkkPage.rights.button')}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default KVKK;
