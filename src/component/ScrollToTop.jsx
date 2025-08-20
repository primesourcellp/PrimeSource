import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    // scroll to top when clicking the same link
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href") === pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  return null;
}
