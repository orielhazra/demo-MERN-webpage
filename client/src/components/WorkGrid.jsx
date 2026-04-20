import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { lightenColor } from '../utils/color';
import '../utils/clipper.css';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function WorkGrid({ cases }) {

  const videoRefs = useRef([]);

  const handlePlay = (index) => videoRefs.current[index]?.play();
  const handleStop = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;  // Resets the video to the start
    }
  };

  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
        <h2 className="mt-3 text-5xl font-bold uppercase tracking-tight sm:text-7xl lg:text-7xl">Content dat scoort.</h2>
        <p className="mt-4 max-w-[24rem] text-lg leading-7 sm:text-2xl font-semibold sm:leading-8">Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.</p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 lg:text-lg font-semibold text-black border border-black py-1 px-1 rounded-lg text-sm transition-transform duration-300 transform hover:rotate-[-5deg]"
        >
          Bekijk al ons werk
          <span className="flex items-center justify-center w-8 h-8 bg-black rounded-md">
            <ArrowRight className="h-4 w-4 text-white" />
          </span>
        </a>
      </motion.div>

      <div className="mt-8 hidden sm:grid gap-3 grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ rotate: -2 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] h-full p-2"
            style={{
              gridColumn: `${(index % 3) + 1}`, // Distribute cards into columns
              gridRow: `span 1`, // Ensures each card takes up only 1 row in the grid
              marginTop: `${index * -50}px`,
              marginBottom: `${index * 50}px`,
              backgroundColor: item.bg ?? "red",
            }}
          >
            
            {/* Outer container */}
            <div className="group flex flex-col rounded-[2rem] bg-white h-56 sm:h-[20rem] lg:h-[28rem] relative overflow-hidden">

              <video 
                className="w-full h-full rounded-[2rem] object-cover absolute z-20" 
                ref={(el) => (videoRefs.current[index] = el)}
                onMouseEnter={() => handlePlay(index)} 
                onMouseLeave={() => handleStop(index)} 
                muted 
                playsInline
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Inner container */}
              <div className="w-full h-full flex flex-col p-1 md:p-2 lg:p-3 rounded-[1.5rem] bg-white">
                <div className="mt-auto w-full z-30 rounded-b-[1.5rem] md:rounded-b-[1rem] lg:rounded-b-[1rem] rounded-t-[2rem] p-2 clip-custom md:clip-custom lg:clip-custom" style={{ backgroundColor: item.bg ?? "red"}}>
                  <div className="h-10 flex justify-right">
                    <button className="ml-auto inline-flex items-center gap-2 rounded-full bg-white px-3 text-lg font-semibold text-gray-900 transition-all duration-500 ease-out hover:rotate-[2deg] hover:scale-110">
                      <span className="relative h-4 w-4 overflow-hidden -rotate-45">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                          <ArrowRight/>
                        </span>
                        
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-500 group-hover:translate-x-0">
                          <ArrowRight/>
                        </span>
                      </span>
                    </button>
                  </div>
                  <h3 className="mt-2 lg:max-w-[70%] w-full text-sm text-white font-bold leading-tight md:text-sm lg:text-lg">{item.title}</h3>
                  <button
                    className="mt-5 inline-flex items-center gap-2 px-2 py-2 text-sm text-white font-semibold rounded-[0.5rem]"
                    style={{
                      backgroundColor: item.bg ? lightenColor(item.bg, 0.4) : "#f7a7a7", // Example: Lighten the background color
                    }}
                  >
                    {item.cta}
                  </button>
                </div>
              </div>
              
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
