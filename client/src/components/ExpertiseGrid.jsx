import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export default function ExpertiseSection({ expertise }) {
  const sectionRef = useRef(null);
  const previousScrollRef = useRef(0);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [segmentProgress, setSegmentProgress] = useState(0);

  const total = expertise.length;
  const lastIndex = Math.max(total - 1, 0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (total <= 1) {
      setActiveIndex(0);
      setSegmentProgress(0);
      return;
    }

    const scrollDirection = latest >= previousScrollRef.current ? 1 : -1;
    previousScrollRef.current = latest;
    setDirection(scrollDirection);

    const scaled = latest * lastIndex;

    let nextIndex;
    let localProgress;

    if (scrollDirection > 0) {
      // scrolling down
      nextIndex = Math.floor(scaled);
      localProgress = scaled - nextIndex;
    } else {
      // scrolling up
      nextIndex = Math.ceil(scaled);
      localProgress = nextIndex - scaled;
    }

    const safeIndex = Math.max(0, Math.min(nextIndex, lastIndex));

    if (safeIndex !== activeIndexRef.current) {
      setDirection(safeIndex > activeIndexRef.current ? 1 : -1);
      activeIndexRef.current = safeIndex;
      setActiveIndex(safeIndex);
    }

    setSegmentProgress(localProgress);
  });

  const safeActiveIndex = Math.max(0, Math.min(activeIndex, lastIndex));
  const activeItem = expertise[safeActiveIndex];
  const prevItem = safeActiveIndex > 0 ? expertise[safeActiveIndex - 1] : null;
  const nextItem =
    safeActiveIndex < lastIndex ? expertise[safeActiveIndex + 1] : null;

  const hasPrev = !!prevItem;
  const hasNext = !!nextItem;

  const progress = Math.max(0, Math.min(segmentProgress, 1));

  // Downward scroll:
  // active card zooms out, next card slides up
  const eased = progress * progress;

  const downNextY = hasNext ? 544 - eased * 544 : 544;
  const downActiveScale = hasNext ? 1 - eased * 0.1 : 1;

  // Upward scroll:
  // previous card zooms in, active card slides down
  const upPrevScale = hasPrev ? 0.92 + eased * 0.08 : 1;
  const upActiveY = hasPrev ? eased * 544 : 0;

  function Card({ item, index }) {
    if (!item) return null;

    return (
      <article
        className={`min-h-[30rem] w-full rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-black/20 sm:p-8 ${item.bg ?? "bg-zinc-900"}`}
      >
        <div className="grid grid-cols-2 items-start justify-between gap-4 w-full min-h-full">
          {/* Left Column (Title, Headline, Body) */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="bg-gray-100 text-black text-xs font-semibold uppercase tracking-[0.3em] px-4 py-2 rounded-md w-fit">
                Expertise
              </div>
              <h3 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
                {item.title}
              </h3>
            </div>

            <div className="mt-auto">
              <h4 className="mt-6 text-lg font-bold sm:text-xl">{item.headline}</h4>

              <p className="mt-3 max-w-2xl text-sm leading-6 sm:text-base">{item.body}</p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-black py-2 px-4 rounded-lg transition-transform duration-300 transform hover:rotate-[-5deg]"
              >
                {item.cta}
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-md">
                  <ArrowRight className="h-4 w-4 text-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column (Card Number and Content Box) */}
          <div className="flex flex-col items-end text-6xl font-bold text-gray-300">
            <div>{String(index + 1).padStart(2, "0")}</div>
            <div className="mt-6 min-h-[14rem] w-[80%] max-w-52 rounded-[1.5rem] border border-white/10 bg-zinc-800 sm:h-60 md:h-72 transform rotate-[3deg]">
              <video 
                className="w-full h-full rounded-[1.5rem] object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (!activeItem) return null;

  return (
    <section
      id="expertises"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
      style={{ height: `${Math.max(total, 1) * 100}vh` }}
    >
      <div className="sticky top-24">
        <div className="relative h-[34rem] overflow-hidden">
          {direction > 0 ? (
            <>
              <motion.div
                style={{
                  scale: downActiveScale,
                  opacity: 1,
                }}
                className="absolute inset-0 z-20 origin-center"
              >
                <Card item={activeItem} index={safeActiveIndex} />
              </motion.div>

              {hasNext && (
                <motion.div
                  style={{
                    y: downNextY,
                    opacity: 1,
                    scale: 1,
                  }}
                  className="absolute inset-0 z-30"
                >
                  <Card item={nextItem} index={safeActiveIndex + 1} />
                </motion.div>
              )}
            </>
          ) : (
            <>
              {hasPrev && (
                <motion.div
                  style={{
                    scale: upPrevScale,
                    opacity: 1,
                  }}
                  className="absolute inset-0 z-20 origin-center"
                >
                  <Card item={prevItem} index={safeActiveIndex - 1} />
                </motion.div>
              )}

              <motion.div
                style={{
                  y: upActiveY,
                  opacity: 1,
                  scale: 1,
                }}
                className="absolute inset-0 z-30"
              >
                <Card item={activeItem} index={safeActiveIndex} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}