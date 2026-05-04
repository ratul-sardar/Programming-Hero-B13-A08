"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function FadeInUp({ children }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(40px)",
    config: {
      tension: 220,
      friction: 40,
    },
  });

  return (
    <animated.div ref={ref} style={styles}>
      {children}
    </animated.div>
  );
}
