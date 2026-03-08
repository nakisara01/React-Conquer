import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    if (event.clientY <= 0 && typeof onBefore === "function") {
      console.log(event)
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};