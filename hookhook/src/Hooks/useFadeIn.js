import { useRef, useEffect } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  // if (typeof duration !== Number || typeof delay !== Number) {
  //   return;
  // }

  const element = useRef();

  useEffect(() => {
    if (element) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};