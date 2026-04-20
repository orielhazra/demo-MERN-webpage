import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[-10%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-12%] top-[4rem] h-[20rem] w-[20rem] rounded-full bg-pink-500/20 blur-3xl sm:h-[26rem] sm:w-[26rem]"
        animate={{ x: [0, -20, 0], y: [0, -18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-[10%] h-[18rem] w-[18rem] rounded-full bg-amber-300/10 blur-3xl sm:left-[20%] sm:h-[24rem] sm:w-[24rem]"
        animate={{ x: [0, 16, 0], y: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,#07111a_0%,#081523_45%,#07111a_100%)]" />
    </div>
  );
}
