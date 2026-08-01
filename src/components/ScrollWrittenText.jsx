import { useEffect, useRef, useState } from "react";
import { TegakiRenderer } from "tegaki";
import caveat from "tegaki/fonts/caveat";

import "./ScrollWrittenText.css";

export default function ScrollWrittenText({
  children,
  as: Tag = "span",
  className = "",
  speed = 4.0,
}) {
  const containerRef = useRef(null);

  const [shouldWrite, setShouldWrite] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const text = String(children ?? "");

  useEffect(() => {
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (motionQuery.matches) {
      setReduceMotion(true);
      return undefined;
    }

    const element = containerRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldWrite(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={containerRef}
      className={`scroll-written-text ${className}`.trim()}
      aria-label={text}
    >
      {/* Keeps the correct width and height before the animation begins. */}
      <span
        className="scroll-written-text__measurement"
        aria-hidden="true"
      >
        {text}
      </span>

      <span
        className="scroll-written-text__drawing"
        aria-hidden="true"
      >
        {reduceMotion ? (
          text
        ) : shouldWrite ? (
          <TegakiRenderer
            font={caveat}
            time={{
              mode: "uncontrolled",
              speed,
              loop: false,
            }}
            style={{
              fontSize: "1em",
              color: "currentColor",
              overflow: "visible",
            }}
          >
            {text}
          </TegakiRenderer>
        ) : null}
      </span>
    </Tag>
  );
}