import { useEffect } from "react";

function useBackToTop() {
  useEffect(() => {
    const btn = document.querySelector("#backto-top");

    function handleScroll() {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    }

    function handleBackToTopClick(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    btn.addEventListener("click", handleBackToTopClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      btn.removeEventListener("click", handleBackToTopClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useBackToTop;
