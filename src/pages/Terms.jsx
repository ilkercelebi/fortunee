import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  const sections = [
    { id: 'section1', icon: 'info', key: 'section1' },
    { id: 'section2', icon: 'person_add', key: 'section2' },
    { id: 'section3', icon: 'payments', key: 'section3' },
    { id: 'section4', icon: 'copyright', key: 'section4' },
    { id: 'section5', icon: 'gavel', key: 'section5' },
    { id: 'section6', icon: 'shield', key: 'section6' },
    { id: 'section7', icon: 'edit_note', key: 'section7' },
    { id: 'section8', icon: 'mail', key: 'section8' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 min-h-[70vh]">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-72 sticky top-24 h-fit">
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-gold font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">list_alt</span> 
            {t('termsPage.index')}
          </h3>
          <nav className="space-y-1">
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20 transition-colors text-sm text-slate-300"
              >
                <span className="material-symbols-outlined text-primary text-lg">{sec.icon}</span>
                <span>{t(`termsPage.nav.${sec.key}`)}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 max-w-[800px]">
        <div className="mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-100 leading-tight">
            {t('termsPage.header.title')}
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-1 w-20 bg-gold rounded-full"></div>
            <p className="text-slate-400 text-sm font-medium">
              {t('termsPage.header.updated')}
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 space-y-12">
          {sections.map((sec, idx) => (
            <article key={sec.id} id={sec.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-gold">0{idx + 1}.</span>
                <h3 className="text-xl font-bold text-slate-100">
                  {t(`termsPage.sections.${sec.key}.title`).replace(/^\d+\.\s*/, '')}
                </h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm lg:text-base">
                <p>{t(`termsPage.sections.${sec.key}.content`)}</p>
              </div>
              
              {sec.id === 'section8' && (
                <div className="pt-6">
                  <button className="w-full lg:w-auto bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all border border-primary/40">
                    {t('termsPage.sections.section8.button')}
                  </button>
                </div>
              )}
              
              {idx < sections.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-gold/40 to-transparent pt-4"></div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Terms;
