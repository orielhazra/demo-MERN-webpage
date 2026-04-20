import { AnimatePresence, motion } from 'framer-motion';
import { X, Flame } from 'lucide-react';
import { HypedIcon } from '../assets/icons';

export default function MobileMenu({ open, onClose, onOpenReply, nav }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-2 z-50 lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-full rounded-2xl flex-col border-l border-white/10 bg-pink-300 px-7 py-2 backdrop-blur-xl justify-between"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="w-[102px] h-[42px]">
                <HypedIcon/>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {nav.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  className="mx-auto rounded-2xl border border-white/8 bg-white px-4 py-2 text-4xl font-semibold text-black text-center hover:bg-slate-950 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <button onClick={onOpenReply} className="mx-auto mb-16 rounded-xl bg-slate-950 px-1 py-1 text-center text-xl font-bold text-white inline-flex gap-2 items-center transition duration-300 hover:rotate-[-2deg]">
              <p className="pl-2">Get Results</p>
              <span className="px-2 py-2 rounded-xl bg-white text-orange-500">
                <Flame className="h-7 w-7" />
              </span> 
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
