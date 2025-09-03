"use client";

import {
  animate,
  AnimationPlaybackControlsWithThen,
  useMotionValue,
} from "motion/react";
import {
  Aclonica,
  Anta,
  Audiowide,
  Freckle_Face,
  Geo,
  Iceland,
  Monoton,
  Press_Start_2P,
  Rationale,
  Revalia,
  Rubik_Iso,
  Stalinist_One,
  Zen_Dots,
} from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";

export const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});
export const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });
export const geo = Geo({ subsets: ["latin"], weight: ["400"] });
export const zenDots = Zen_Dots({ subsets: ["latin"], weight: ["400"] });
export const anta = Anta({ subsets: ["latin"], weight: ["400"] });
export const rationale = Rationale({ subsets: ["latin"], weight: ["400"] });
export const iceland = Iceland({ subsets: ["latin"], weight: ["400"] });
export const rubikIso = Rubik_Iso({ subsets: ["latin"], weight: ["400"] });
export const stalinistOne = Stalinist_One({
  subsets: ["latin"],
  weight: ["400"],
});
export const freckleface = Freckle_Face({
  subsets: ["latin"],
  weight: ["400"],
});
export const revalia = Revalia({ subsets: ["latin"], weight: ["400"] });
export const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });
export const aclonica = Aclonica({ subsets: ["latin"], weight: ["400"] });

const fonts = [
  pressStart2P,
  audiowide,
  geo,
  zenDots,
  anta,
  rationale,
  iceland,
  rubikIso,
  stalinistOne,
  freckleface,
  revalia,
  monoton,
  aclonica,
];

interface AnimatedTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  onHover?: boolean;
  autoStart?: boolean;
  cooldownMs?: number;
}

export default function AnimatedText({
  children,
  className = "",
  style = {},
  onHover = true,
  autoStart = true,
  cooldownMs = 200,
}: AnimatedTextProps) {
  const [currentFont, setCurrentFont] = useState(0);
  const fontIndex = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControlsWithThen>(null);
  const lastAnimationTime = useRef<number>(0);

  // Listen to motion value changes
  useEffect(() => {
    const unsubscribe = fontIndex.on("change", (value) => {
      const index = Math.floor(value) % fonts.length;
      setCurrentFont(index);
    });
    return unsubscribe;
  }, [fontIndex]);

  const cycleFont = useCallback(() => {
    const now = Date.now();

    // Prevent animation if less than cooldownMs have passed
    if (now - lastAnimationTime.current < cooldownMs) {
      return;
    }

    lastAnimationTime.current = now;

    // Stop any existing animation first
    if (animationRef.current) {
      animationRef.current.stop();
    }

    const startValue = fontIndex.get();
    const totalCycles = 100 + Math.floor(Math.random() * 30); // Much more cycles (100-130)
    const endValue = startValue + totalCycles;

    // Animate with extreme deceleration - starts VERY fast
    animationRef.current = animate(fontIndex, endValue, {
      duration: 8,
      ease: [0.05, 0.9, 0.1, 1], // Extremely aggressive deceleration
      onComplete: () => {
        // Animation complete - font will naturally settle on final position
      },
    });
  }, [fontIndex, cooldownMs]);

  useEffect(() => {
    // Initialize with a random font
    const initialFont = Math.floor(Math.random() * fonts.length);
    setCurrentFont(initialFont);
    fontIndex.set(initialFont);

    // Start initial animation after a short delay if autoStart is true
    if (autoStart) {
      const timer = setTimeout(() => {
        cycleFont();
      }, 500);

      return () => {
        clearTimeout(timer);
        if (animationRef.current) {
          animationRef.current.stop();
        }
      };
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [cycleFont, fontIndex, autoStart]);

  const handleInteraction = onHover ? { onMouseEnter: cycleFont } : {};

  // Ensure currentFont is within bounds
  const safeCurrentFont = Math.max(0, Math.min(currentFont, fonts.length - 1));
  const currentFontClass = fonts[safeCurrentFont]?.className || "";

  return (
    <span
      className={`${currentFontClass} ${className}`}
      style={style}
      {...handleInteraction}
    >
      {children}
    </span>
  );
}
