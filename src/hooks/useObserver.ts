import { useEffect, useRef, useState } from "react";

export const useObserver = (defaultId: string) => {
  const [elementId, setElementId] = useState(defaultId);
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
    if (!elementId) return;

    observerRef.current.observe(document.getElementById(elementId));
    return () => {
      observerRef.current.disconnect();
      setActive(false);
    };
  }, [elementId]);

  return { active, setElementId };
};
