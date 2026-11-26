import { useCallback, useEffect, useRef, useState } from "react";

export default function useDismissibleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((current) => !current), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen, close]);

  return { isOpen, containerRef, toggleRef, close, toggle };
}
