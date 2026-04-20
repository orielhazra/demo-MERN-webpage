import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function SectionHeading({ eyebrow, title, body }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{eyebrow}</div>
      <h2 className="mt-3 text-5xl font-bold uppercase tracking-tight sm:text-7xl lg:text-7xl">{title}</h2>
      {body ? <p className="mt-4 text-lg leading-7 sm:text-2xl font-semibold sm:leading-8">{body}</p> : null}
    </motion.div>
  );
}
