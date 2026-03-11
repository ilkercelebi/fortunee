import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold text-xs font-bold tracking-widest uppercase">{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              {t('hero.title1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-primary">
                {t('hero.title2')}
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-gold hover:scale-105 transition-transform text-background-dark font-bold rounded-xl shadow-xl shadow-gold/20">
                <span className="material-symbols-outlined">ios</span>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase opacity-70">{t('hero.downloadAppStore')}</p>
                  <p className="text-lg">{t('hero.appStore')}</p>
                </div>
              </button>
              <button className="flex items-center gap-3 px-8 py-4 glass-card hover:bg-white/10 transition-colors text-white font-bold rounded-xl">
                <span className="material-symbols-outlined">info</span>
                {t('hero.learnMore')}
              </button>
            </div>
            
            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-gold text-2xl font-black">{t('hero.stat1')}</span>
                <span className="text-slate-500 text-xs uppercase font-bold tracking-tighter">{t('hero.stat1Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gold text-2xl font-black">{t('hero.stat2')}</span>
                <span className="text-slate-500 text-xs uppercase font-bold tracking-tighter">{t('hero.stat2Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gold text-2xl font-black">{t('hero.stat3')}</span>
                <span className="text-slate-500 text-xs uppercase font-bold tracking-tighter">{t('hero.stat3Label')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <img className="relative w-full max-w-[320px] drop-shadow-2xl" alt="Premium iPhone mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBKI3gDcjirleSLLFZSXPXHtOu_XvOV4dEkbKDDI-SnKcyM_CyIdBM7i76CU9zZ3tYzYgoibGsiqoZF_MItKh1GTfGpvnwURKlihD9JnzxkkD9t1ZQg7iWgqSH1Mv4EKAyNKn7jgd0dQPE8Bqg6AjNwIsVEY-h-D2BBR-cZ0f1P-tLpr1tIcZBHRQdSQVSypBFt-xX9vvnpLdCt_LRDX751Ywzd8INa96_fAsPFOOtKWHbe1NLYcvgTF2nvKLIoYDYI0-opDHnJUg"/>
          </div>
        </div>
      </section>

      {/* APP SCREENSHOTS */}
      <section className="bg-secondary-purple/20 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">{t('screenshots.title')}</h2>
          <p className="text-slate-400">{t('screenshots.subtitle')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 px-6">
          <div className="transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
            <img className="rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl glass-card" alt="App home screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7UWkiQcy2YdxlWao7FvL4JCBo_Mk0ntKvSjwZV7RotswTDgKDnIDI2x5acTSkngBFAMkC2qzX5JKAezpWeUw384dhfXvOLs3UDEggWuC-DnYy3wOb45XOuT_R5Rnln3pqpBbcRXUR27Jt7TOkYVwA-VWWzc2NPOZxRJtvWFdtIl_sWjofXwXGGvsDzn6PWQg-auk5PNFD-ai4GiU2Pq3tsIM-joxEeuFUucqGCPMkcDFFdkL9VClaLq1FWkbhQ0ReEFwzLppMeZE"/>
          </div>
          <div className="transform scale-110 z-10 hover:scale-110 md:hover:scale-125 transition-transform duration-500">
            <img className="rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl glass-card" alt="App result screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ss6DZiEIM3ULJOozrkVeIJZQMPXA2NzG4zNLPsPJfCu6HQDnQDU_dlSQa3rYIJqD77aXIsSeB_QzEHsfO9cvuux-1vh3zkfO0_21wFR5com3x0TKI7eJ2Ws6MRDkMB7tE2ypso8915XC7AugkUAEYG_rk1D-9121HIS_AtCoZ1Sr_9dHIiK07jfRbPYlmMEqhAuWg31RJTK9IGgsOKTWxHXGgnStpuGjKU-JdhQZbcjewfHeqE_cXO8KFOWi53PZGmgUeTFees8"/>
          </div>
          <div className="transform rotate-[8deg] hover:rotate-0 transition-transform duration-500">
            <img className="rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl glass-card" alt="Tarot cards screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6QFmFOZv4_ff_y6qoSB-4jZCvjuzfMrBIoOWfjBoiP-vPZxW2-04vwfPgFeQmZzyQ8OLiYe8-hnty1Ude9RdHu9XtKpAmbvY4y1E8uD__dNmw5M0YbUwcnbP9F1ZqxmT9X7y0rUPE6tbmF_FaZQevJ7MTYoJelo9xM3SAwB1zcNlPqHvMwUrvx-O0BsI0pGD7r7alZPwiLaH36-smk7Sk2rwqsBvkGvbhPKjg5FQQVtwcJXnwRS9OykTzA9xVohCCGnB3nK10yM"/>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-white text-3xl font-bold mb-2">{t('testimonials.title')}</h2>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="ml-2 text-white font-bold">{t('testimonials.scoreLabel')}</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl italic text-slate-300">
              {t('testimonials.review1')}
              <p className="mt-6 not-italic font-bold text-white text-sm">— {t('testimonials.user1')} <span className="text-slate-500 font-normal ml-2">App Store User</span></p>
            </div>
            <div className="glass-card p-8 rounded-2xl italic text-slate-300">
              {t('testimonials.review2')}
              <p className="mt-6 not-italic font-bold text-white text-sm">— {t('testimonials.user2')} <span className="text-slate-500 font-normal ml-2">App Store User</span></p>
            </div>
            <div className="glass-card p-8 rounded-2xl italic text-slate-300">
              {t('testimonials.review3')}
              <p className="mt-6 not-italic font-bold text-white text-sm">— {t('testimonials.user3')} <span className="text-slate-500 font-normal ml-2">App Store User</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-secondary-purple p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-white text-4xl lg:text-6xl font-black">{t('cta.title1')}<br/>{t('cta.title2')}</h2>
            <p className="text-white/80 text-lg max-w-2xl">{t('cta.desc')}</p>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <button className="flex items-center gap-4 px-10 py-5 bg-gold text-background-dark font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">ios</span>
                <div className="text-left leading-tight">
                  <p className="text-xs uppercase opacity-70">{t('cta.downloadAppStore')}</p>
                  <p className="text-2xl">{t('cta.appStore')}</p>
                </div>
              </button>
              <div className="flex flex-col items-center gap-2">
                <img className="p-2 bg-white rounded-xl w-32 h-32" alt="QR Code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXticQh00NxYkrDrpL-CURFTG0XUvoZG1Ex3MxRwvMvEXLzoS6BM7H-X_xqf84c0Nct-p9smcYBe4v2A-cVnpPwGEOs0j6hUTie_c4AK4dmGnyT-MfhvDmvXjD57PzvR0ul0lNH0D_0bJlQCdrriaWOwLroMJrNSbraXurD_nAxTdFKPNNU4VR1nGaINy1kBt7e3CCrFekhCX4BspbLKc56SfK_00VG5CzaEjsxbXZn0X2g-ahVzoV-_5GeCb3zXMwHmKSRYYz-m0"/>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{t('cta.scan')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
