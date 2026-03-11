import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden cosmic-bg bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-gold selection:text-background-dark">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
