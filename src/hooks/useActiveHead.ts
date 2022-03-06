import { useEffect, useRef, useState } from "react";

export const useActiveHead = (ids: string[]) => {
  const [active, setActive] = useState("");
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: `0% 0% -99% 0%`,
      }
    );
  }, []);

  useEffect(() => {
    ids.forEach((id) => {
      observerRef.current.observe(document.getElementById(id));
    });

    return () => {
      observerRef.current.disconnect();
      setActive("");
    };
  }, [ids]);

  return { active };
};
