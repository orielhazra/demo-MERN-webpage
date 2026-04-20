import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero({ hero, stats }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-14 sm:px-6 lg:px-10 lg:pb-24 lg:pt-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
        <h1 className="max-w-4xl text-4xl font-bold capitalize leading-[0.94] tracking-tight sm:text-6xl lg:text-[5.5rem]">
          {hero.title.join(" ")}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-tight font-semibold text-white/72 sm:mt-8 sm:text-2xl">{hero.description.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}</p>

      </motion.div>

      <div className="grid gap-5 grid-cols-[18rem] md:grid-cols-[18rem,18rem] lg:grid-cols-[16rem,16rem,16rem,16rem] overflow-hidden p-5">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 22 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? -3 : 3,
              skewY: index % 2 === 0 ? 2 : -2,
            }}
            whileHover={{
              rotate: 0,
              skewY: 0,
              scale: 1.02,
            }}
            transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
            className={`h-[26rem] rounded-[2rem] border border-white/10 shadow-2xl shadow-black/20 backdrop-blur ${item.cardBg ?? "bg-white/6"}`}
          >
            {/* Check if item.title exists */}
            {item.value ? (
              <div className="flex flex-col h-full p-5">
                <div className="text-6xl font-semibold tracking-tight sm:text-5xl">{item.value}</div>
                <div className="mt-auto flex flex-col items-start">
                  <div className="text-xl font-semibold sm:text-xl">
                    {item.label}
                  </div>
                  <div className="my-1 h-px w-full bg-black" />
                  <div className="text-lg leading-6">
                    {item.sub}
                  </div>
                </div>
              </div>
            ) : <video 
            className="w-full h-full rounded-[2rem] object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
