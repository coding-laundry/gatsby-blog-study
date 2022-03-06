import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const PROGRESS_DELAY = 10;

export const useScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(1);

  const setScrollProgressConfig = throttle(() => {
    const progress =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
      100;
    setScrollProgress(Math.ceil(progress));
  }, PROGRESS_DELAY);

  useEffect(() => {
    window.addEventListener("scroll", setScrollProgressConfig);

    return () => {
      window.removeEventListener("scroll", setScrollProgressConfig);
    };
  }, []);

  return { scrollProgress };
};
