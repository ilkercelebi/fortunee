import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-12 border-t border-white/5 bg-background-dark/80 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gold"></span>
            <h2 className="text-white text-lg font-bold">{t('nav.title')}</h2>
          </div>
          <p className="text-slate-500 text-sm">
            {t('footer.desc').split('<br/>').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold text-sm uppercase">{t('footer.support')}</h5>
          <a href="#" className="text-slate-500 hover:text-white text-sm">{t('footer.faq')}</a>
          <a href="#" className="text-slate-500 hover:text-white text-sm">{t('footer.contact')}</a>
          <a href="#" className="text-slate-500 hover:text-white text-sm">{t('footer.feedback')}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold text-sm uppercase">{t('footer.legal')}</h5>
          <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.terms')}</Link>
          <Link to="/kvkk" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.kvkk')}</Link>
          <Link to="/contact" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.contact')}</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.designed')}</p>
      </div>
    </footer>
  );
};

export default Footer;
