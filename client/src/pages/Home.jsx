import { useEffect, useState } from 'react';
import BackgroundOrbs from '../components/BackgroundOrbs';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import ReplyMenu from '../components/ReplyMenu';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExpertiseGrid from '../components/ExpertiseGrid';
import WorkGrid from '../components/WorkGrid';
import Brands from '../components/Brands';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { fallbackContent } from '../data/siteContent';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [content, setContent] = useState(fallbackContent);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? 'hidden' : previous || '';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = replyOpen ? 'hidden' : previous || '';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [replyOpen]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/content/home');
        if (!response.ok) return;
        const data = await response.json();
        setContent(data);
      } catch {
        // fallback content stays in place
      }
    };

    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf4ec] text-black selection:bg-pink-500/30 selection:text-white">
      <BackgroundOrbs />
      <Navbar nav={content.nav} onOpenMenu={() => setMobileOpen(true)} onOpenReply={() => setReplyOpen(true)} />
      <MobileMenu nav={content.nav} open={mobileOpen} onClose={() => setMobileOpen(false)} onOpenReply={() => {setMobileOpen(false);setReplyOpen(true)}} />
      <ReplyMenu open={replyOpen} onClose={() => setReplyOpen(false)} />

      <main id="top">
        <Hero hero={content.hero} stats={content.stats} />
        <AboutSection about={content.about} />
        <ExpertiseGrid expertise={content.expertise} />
        <WorkGrid cases={content.cases} />
        <Brands brands={content.brands} />
        <ContactSection contact={content.contact} />
      </main>

      <Footer contact={content.contact} nav={content.nav} />
    </div>
  );
}
