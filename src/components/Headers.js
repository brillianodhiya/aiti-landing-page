import { useStickyHeaderMenu } from "@aiti/hooks/useStickyHeaderMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Headers = () => {
  const router = useRouter();
  const isSticky = useStickyHeaderMenu();

  return (
    <header className="header axil-header header-style-1">
      <div id="axil-sticky-placeholder" />
      <div className={`axil-mainmenu ${isSticky ? "axil-sticky" : ""}`}>
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link href="/" key={"home"}>
                <Image
                  className="light-version-logo"
                  src="/assets/media/bg_putih.png"
                  alt="logo"
                  width={161}
                  height={50}
                  priority
                />
              </Link>
              <Link href="/" key={"home2"}>
                <Image
                  className="dark-version-logo"
                  src="/assets/media/bg_hitam.png"
                  alt="logo"
                  width={161}
                  height={50}
                />
              </Link>
              <Link href="/" key={"home3"}>
                <Image
                  className="sticky-logo"
                  src="/assets/media/bg_putih.png"
                  alt="logo"
                  width={161}
                  height={50}
                />
              </Link>
            </div>
            <div className="header-main-nav">
              {/* Start Mainmanu Nav */}
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link href="/" key={"home4"}>
                        <Image
                          className="light-mode"
                          src="/assets/media/bg_putih.png"
                          alt="Site Logo"
                          width={161}
                          height={50}
                        />
                        <Image
                          className="dark-mode"
                          src="/assets/media/bg_hitam.png"
                          alt="Site Logo"
                          width={161}
                          height={50}
                        />
                      </Link>
                    </div>
                    <button
                      className="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <ul className="mainmenu">
                  {/* <li>
                    <Link
                      className={router.pathname == "/" && "active"}
                      href={"/"}
                    >
                      Digital Agency
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className={router.pathname == "/services" ? "active" : ""}
                      href={"/services"}
                      key={"services"}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        router.pathname == "/portofolio" ? "active" : ""
                      }
                      href={"/portofolio"}
                      key={"portofolio"}
                    >
                      Portfolio
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className={router.pathname == "/blog" ? "active" : ""}
                      href={"/blog"}
                      key={"blog"}
                    >
                      Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className={router.pathname == "/our-team" ? "active" : ""}
                      href={"/our-team"}
                      key={"our-team"}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/contact" ? "active" : ""}
                      href={"/contact"}
                      key={"contact"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="sidemenu-btn d-lg-block d-none">
                  <button
                    className="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenuRight"
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    className="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilemenu-popup"
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </li>
                <li className="my_switcher d-block d-lg-none">
                  <ul>
                    <li title="Light Mode">
                      <a
                        style={{ cursor: "pointer" }}
                        className="setColor light"
                        data-theme="light"
                      >
                        <i className="fal fa-lightbulb-on" />
                      </a>
                    </li>
                    <li title="Dark Mode">
                      <a
                        style={{ cursor: "pointer" }}
                        className="setColor dark"
                        data-theme="dark"
                      >
                        <i className="fas fa-moon" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
