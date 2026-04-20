import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutSection({ about }) {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-6 px-4 py-2 sm:px-6 lg:px-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="mt-1 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{about.heading}</h2>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-4xl grid grid-cols-1 justify-start gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-2 sm:p-8"
      >
        <div className="w-full max-w-[200px] h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-black shadow-lg">
          <img className="w-full h-full rounded-[2rem] object-cover" src = {null}  alt="image" />
        </div>

        <div className="flex flex-col items-start justify-center gap-4 text-sm font-semibold leading-6 text-white/72 sm:text-lg sm:leading-7">
          <p>{about.body}</p>

          <div className="flex w-full items-center">
            <button className="inline-flex items-center gap-2 rounded-lg border border-black bg-transparent px-2 py-1 text-sm font-semibold text-black transition duration-300 hover:rotate-[-2deg] hover:bg-white/10">
              Leer ons kennen
              <span className="transition-transform duration-300 rounded-lg group-hover:translate-x-1 bg-black text-white px-2 py-1 text-lg">
                <ArrowRight className="text-white"/>
              </span>
            </button>

            <button className="group ml-auto inline-flex items-center gap-2 rounded-lg border border-black bg-transparent px-1 py-1 text-lg font-semibold text-red-500 transition-all duration-300 ease-out hover:rotate-[2deg] hover:scale-110">
              <span className="relative h-4 w-4 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-full">
                  <ArrowDown/>
                </span>
                
                <span className="absolute inset-0 flex items-center justify-center -translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <ArrowDown/>
                </span>
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
