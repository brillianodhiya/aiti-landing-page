import { useEffect } from "react";

function useMobileMenuActivation() {
  useEffect(() => {
    function resizeClassAdd() {
      const menuItems = document.querySelectorAll(
        ".menu-item-has-children > a"
      );
      const mobileMenu = document.getElementById("mobilemenu-popup");

      if (window.matchMedia("(max-width: 991px)").matches) {
        menuItems.forEach((menuItem) => {
          menuItem.addEventListener("click", function (event) {
            event.preventDefault();

            const targetParent = this.closest(".mainmenu-nav");
            const target = this.nextElementSibling;
            const targetSiblings = Array.from(
              this.parentNode.parentNode.children
            )
              .filter((child) => child !== this.parentNode)
              .map((child) => child.querySelector(".axil-submenu"));

            target.classList.toggle("slide-down");
            targetSiblings.forEach((targetSibling) =>
              targetSibling.classList.remove("slide-down")
            );

            this.parentNode.classList.toggle("open");
          });
        });

        mobileMenu.classList.add("offcanvas");
      } else {
        menuItems.forEach((menuItem) => {
          menuItem.removeEventListener("click", function (event) {
            event.preventDefault();

            const targetParent = this.closest(".mainmenu-nav");
            const target = this.nextElementSibling;
            const targetSiblings = Array.from(
              this.parentNode.parentNode.children
            )
              .filter((child) => child !== this.parentNode)
              .map((child) => child.querySelector(".axil-submenu"));

            target.classList.toggle("slide-down");
            targetSiblings.forEach((targetSibling) =>
              targetSibling.classList.remove("slide-down")
            );

            this.parentNode.classList.toggle("open");
          });
        });

        mobileMenu.classList.remove("offcanvas");
      }
    }

    resizeClassAdd();

    window.addEventListener("resize", resizeClassAdd);

    return () => {
      window.removeEventListener("resize", resizeClassAdd);
    };
  }, []);
}

export default useMobileMenuActivation;
