import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="material-symbols-outlined text-gold text-3xl"></span>
          <h2 className="text-white text-xl font-extrabold tracking-tight">
            {t('nav.title')}
          </h2>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-slate-300 hover:text-gold transition-colors text-sm font-medium">
            {t('nav.features')}
          </Link>
          <Link to="/how-it-works" className="text-slate-300 hover:text-gold transition-colors text-sm font-medium">
            {t('nav.howItWorks')}
          </Link>
          <Link to="/privacy" className="text-slate-300 hover:text-gold transition-colors text-sm font-medium">
            {t('nav.privacy')}
          </Link>
          <Link to="/terms" className="text-slate-300 hover:text-gold transition-colors text-sm font-medium">
            {t('nav.terms')}
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-gold transition-colors text-sm font-medium">
            {t('nav.contact')}
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-secondary-purple/50 rounded-full p-1 border border-white/10">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1 text-xs font-bold rounded-full uppercase transition-colors ${
                i18n.language === 'tr' ? 'bg-gold text-background-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full uppercase transition-colors ${
                i18n.language === 'en' ? 'bg-gold text-background-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          
          <button className="hidden lg:flex bg-primary hover:bg-primary/80 text-white text-sm font-bold py-2 px-6 rounded-lg transition-all items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm">download</span>
            {t('nav.download')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
