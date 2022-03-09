import { useEffect, useRef, useState } from "react";

export const useObserver = (defaultElement: HTMLElement) => {
  const [element, setElement] = useState(defaultElement);
  const [active, setActive] = useState(false);
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(true);
          observerRef.current.unobserve(entry.target);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!element) return;

    observerRef.current.observe(element);
    return () => {
      observerRef.current.disconnect();
      setActive(false);
    };
  }, [element]);

  return { active, setElement };
};
