import { Menu, Flame } from 'lucide-react';
import { HypedIcon } from '../assets/icons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onOpenMenu, onOpenReply, nav }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // Check the scroll direction and toggle navbar visibility
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false); // Hide the navbar when scrolling down
      } else {
        setShow(true); // Show the navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -70 }} // Hide the navbar when scroll down
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="w-[102px] h-[42px]">
            <HypedIcon/>
          </a>

          <nav className="hidden items-center lg:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium bg-white px-4 py-2 first:rounded-l-lg last:rounded-r-lg transition hover:text-white hover:bg-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReply}
              className="hidden items-center gap-2 hidden rounded-lg border border-white/15 bg-pink-300 px-2 py-1 text-xs font-semibold transition hover:border-white/30 hover:bg-white/10 lg:inline-flex"
              aria-label="Open menu"
            >
              Get results
              <span className="px-1 py-1 rounded-lg bg-white text-orange-500">
                <Flame className="h-3 w-3" />
              </span>

            </button>
            <button
              type="button"
              onClick={onOpenMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-200 border border-white/15 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
