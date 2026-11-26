import { useEffect } from "react";

export default function AnalyticsTracker() {
  useEffect(() => {
    let idleId;
    const startAnalytics = () => {
      if (window.gtag) return;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", "G-ZKFQ0EFNKY");
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZKFQ0EFNKY";
      document.head.appendChild(script);
    };
    const schedule = () => {
      idleId = window.requestIdleCallback ? window.requestIdleCallback(startAnalytics, { timeout: 3000 }) : window.setTimeout(startAnalytics, 1500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.removeEventListener("load", schedule);
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);
  return null;
}
