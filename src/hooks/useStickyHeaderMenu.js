import { useState, useEffect } from "react";

export function useStickyHeaderMenu() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const stickyPlaceHolder = document.getElementById(
        "axil-sticky-placeholder"
      );
      const menu = document.querySelector(".axil-mainmenu");
      const menuH = menu.offsetHeight;
      const topHeaderH =
        document.querySelector(".axil-header-top")?.offsetHeight || 0;
      const targetScroll = topHeaderH + 200;

      if (window.scrollY > targetScroll) {
        setIsSticky(true);
        stickyPlaceHolder.style.height = `${menuH}px`;
      } else {
        setIsSticky(false);
        stickyPlaceHolder.style.height = "0";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky;
}
