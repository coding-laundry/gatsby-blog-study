import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const PROGRESS_DELAY = 10;
const CURRENT_HEIGHT_DELAY = 100;

export const useScroll = () => {
  const [curHeight, setCurrentHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(1);

  const setScrollProgressConfig = throttle(() => {
    const progress =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
      100;
    setScrollProgress(Math.ceil(progress));
  }, PROGRESS_DELAY);

  const setCurrentScrollConfig = throttle(
    () => setCurrentHeight(window.innerHeight + window.scrollY),
    CURRENT_HEIGHT_DELAY
  );

  useEffect(() => {
    window.addEventListener("scroll", setScrollProgressConfig);
    window.addEventListener("scroll", setCurrentScrollConfig);

    return () => {
      window.removeEventListener("scroll", setScrollProgressConfig);
      window.removeEventListener("scroll", setCurrentScrollConfig);
    };
  }, []);

  return { curHeight, scrollProgress };
};
