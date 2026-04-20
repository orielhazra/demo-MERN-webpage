import { motion } from 'framer-motion';


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Brands({ brands }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
        <div className="text-5xl font-semibold tracking-tight lg:max-w-[20rem]">These brands got hyped</div>
        <div className="mt-8 overflow-hidden">
          <div className="looping-items">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="grid motion-div h-20 w-20 lg:h-40 lg:w-40 place-items-center rounded-[1.5rem] border border-white/10 bg-[#0d1825] text-center text-xs font-bold tracking-[0.25em] text-white/55 sm:h-24 sm:text-sm"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
