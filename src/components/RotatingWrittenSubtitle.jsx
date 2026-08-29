import { useEffect, useMemo, useRef, useState } from "react";
import { TegakiRenderer, computeTimeline } from "tegaki";
import caveat from "tegaki/fonts/caveat";

export default function RotatingWrittenSubtitle({
  titles = ["Mechanical Engineer", "Roboticist"],
  speed = 4.0,
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState("writing");
  const [eraseTime, setEraseTime] = useState(0);

  const frameRef = useRef(null);
  const timerRef = useRef(null);

  const text = titles[titleIndex];

  const totalDuration = useMemo(() => {
    return computeTimeline(text, caveat).totalDuration;
  }, [text]);

  const handleWriteComplete = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setEraseTime(totalDuration);
      setPhase("erasing");
    }, 1800);
  };

  useEffect(() => {
    if (phase !== "erasing") {
      return undefined;
    }

    let currentTime = totalDuration;
    let previousTimestamp = null;

    const eraseSpeed = 5.0;

    const animateErase = (timestamp) => {
      if (previousTimestamp === null) {
        previousTimestamp = timestamp;
      }

      const delta = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      currentTime -= delta * eraseSpeed;

      if (currentTime <= 0) {
        setEraseTime(0);

        timerRef.current = setTimeout(() => {
          setTitleIndex(
            (index) => (index + 1) % titles.length
          );

          setPhase("writing");
        }, 300);

        return;
      }

      setEraseTime(currentTime);

      frameRef.current =
        requestAnimationFrame(animateErase);
    };

    frameRef.current =
      requestAnimationFrame(animateErase);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [phase, totalDuration, titles.length]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      className="rotating-written-subtitle hand-note"
      aria-live="polite"
    >
      {phase === "writing" ? (
        <TegakiRenderer
          key={`write-${titleIndex}`}
          font={caveat}
          time={{
            mode: "uncontrolled",
            speed,
            loop: false,
          }}
          onComplete={handleWriteComplete}
          style={{
            fontSize: "1em",
            color: "currentColor",
            overflow: "visible",
          }}
        >
          {text}
        </TegakiRenderer>
      ) : (
        <TegakiRenderer
          key={`erase-${titleIndex}`}
          font={caveat}
          time={eraseTime}
          style={{
            fontSize: "1em",
            color: "currentColor",
            overflow: "visible",
          }}
        >
          {text}
        </TegakiRenderer>
      )}
    </div>
  );
}
