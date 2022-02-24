import { useEffect, useState } from "react";

export const useScroll = () => {
  const [curHeight, setCurrentHeight] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(1);

  const setScrollConfig = () => {
    setCurrentHeight(window.innerHeight + window.scrollY);

    const progress =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
      100;
    setScrollProgress(Math.ceil(progress));
  };

  useEffect(() => {
    // TODO - scroll 이벤트에 throttle 적용하기
    window.addEventListener("scroll", setScrollConfig);

    return () => {
      window.removeEventListener("scroll", setScrollConfig);
    };
  }, []);

  return { curHeight, scrollProgress };
};
