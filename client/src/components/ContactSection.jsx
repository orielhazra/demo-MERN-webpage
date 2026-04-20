import { motion, useSpring } from 'framer-motion';
import { Mail, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HypedIcon } from '../assets/icons';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Listen for mousemove event
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const x = useSpring(mousePosition.x, { stiffness: 300, damping: 30 });
  const y = useSpring(mousePosition.y, { stiffness: 300, damping: 30 });

  return (
    <section
      id="contact"
      className="relative lg:py-16 flex flex-col justify-end mt-auto mb-0"
    >
      {/*<motion.div
        className="absolute z-30 w-[102px] h-[42px]"
        style={{ left: x, top: y }}
        animate={{
          x: [0, 20, 0],  // Fly around the X-axis
          y: [0, 20, 0],  // Fly around the Y-axis
        }}
        transition={{
          duration: 2, // Control the speed of the flyover
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >

        <HypedIcon />

      </motion.div>*/}
      <div className="grid place-items-center border-t border-black p-6 md:p-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <h2 className="mt-3 text-8xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            Let’s Get Hyped!
          </h2>

          {/* Buttons below the header */}
          <div className="mt-6 flex gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-black text-black rounded-lg font-semibold transition-transform duration-300 transform hover:rotate-[-3deg]">
              Mail ons direct
              <span className="px-2 py-1 rounded-lg bg-black text-white">
                <Mail className="h-5 w-5" />
              </span>
            </button>
            <button className="inline-flex items-center gap-2 px-2 py-1 bg-orange-500 text-white rounded-lg font-semibold transition-transform duration-300 transform hover:rotate-[-3deg]">
              Get results
              <span className="px-2 py-1 rounded-lg bg-white text-orange-500">
                <Flame className="h-5 w-5" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}