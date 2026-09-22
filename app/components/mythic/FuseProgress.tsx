"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function FuseProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-0 right-0 top-0 z-[95] h-[3px] w-full bg-transparent">
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-full w-full"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, var(--ash-faint) 0%, var(--blood) 55%, var(--ember) 85%, var(--gold-bright) 100%)",
            boxShadow: "0 0 12px 1px var(--ember-soft)",
          }}
        />
      </motion.div>
    </div>
  );
}
