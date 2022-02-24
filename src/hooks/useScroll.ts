import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const DELAY = 10;

export const useScroll = () => {
  const [curHeight, setCurrentHeight] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(1);

  const setScrollConfig = throttle(() => {
    setCurrentHeight(window.innerHeight + window.scrollY);

    const progress =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
      100;
    setScrollProgress(Math.ceil(progress));
  }, DELAY);

  useEffect(() => {
    window.addEventListener("scroll", setScrollConfig);

    return () => {
      window.removeEventListener("scroll", setScrollConfig);
    };
  }, []);

  return { curHeight, scrollProgress };
};
