import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Privacy = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('privacy@fortuneai.app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    {
      id: 'data-collected',
      navKey: 'dataCollected',
      icon: 'database',
      sectionIcon: 'person_search',
      color: 'primary',
    },
    {
      id: 'use-data',
      navKey: 'useOfData',
      icon: 'insights',
      sectionIcon: 'neurology',
      color: 'gold', 
    },
    {
      id: 'sharing',
      navKey: 'sharing',
      icon: 'share',
      sectionIcon: 'hub',
      color: 'primary',
    },
    {
      id: 'cookies',
      navKey: 'cookies',
      icon: 'cookie',
      sectionIcon: 'cookie',
      color: 'primary',
    },
    {
      id: 'security',
      navKey: 'security',
      icon: 'shield_person',
      sectionIcon: 'security',
      color: 'primary',
    },
    {
      id: 'rights',
      navKey: 'rights',
      icon: 'gavel',
      sectionIcon: 'person_check',
      color: 'gold',
    }
  ];

  const getColorClasses = (color, isBorder = false) => {
    if (color === 'primary') {
      return isBorder ? 'border-l-primary' : 'bg-primary/20 text-primary';
    }
    return isBorder ? 'border-l-gold' : 'bg-gold/20 text-gold';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          {t('privacyPage.header.title')}
        </h1>
        <p className="text-gold/80 font-medium">
          {t('privacyPage.header.updated')}
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <aside className="w-full lg:w-64 sticky lg:top-24 space-y-2">
          <nav className="flex flex-col gap-1">
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                  {sec.icon}
                </span>
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-100">
                  {t(`privacyPage.nav.${sec.navKey}`)}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1 max-w-[800px] space-y-8">
          {sections.map((sec) => (
            <section 
              key={sec.id} 
              id={sec.id} 
              className={`glass-card rounded-xl p-8 border-l-4 ${getColorClasses(sec.color, true)}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${getColorClasses(sec.color)}`}>
                  <span className="material-symbols-outlined">{sec.sectionIcon}</span>
                </div>
                <h2 className="text-2xl font-bold">
                  {t(`privacyPage.sections.${sec.navKey}.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>{t(`privacyPage.sections.${sec.navKey}.content`)}</p>
              </div>
            </section>
          ))}

          <section className="glass-card rounded-xl p-8 bg-primary/5 border-l-4 border-l-primary" id="contact">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary text-white">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <h2 className="text-2xl font-bold">
                {t('privacyPage.sections.contact.title')}
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>{t('privacyPage.sections.contact.content')}</p>
              <div className="bg-black/40 p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <span className="text-gold font-mono">privacy@fortuneai.app</span>
                <button 
                  onClick={handleCopy}
                  className="text-primary hover:text-white transition-colors text-sm font-bold underline"
                >
                  {copied ? t('privacyPage.sections.contact.emailCopied') : t('privacyPage.sections.contact.copyEmail')}
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
