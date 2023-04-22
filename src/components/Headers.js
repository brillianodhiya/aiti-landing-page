import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Headers = () => {
  const router = useRouter();

  return (
    <header className="header axil-header header-style-1">
      <div id="axil-sticky-placeholder" />
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link href="/" replace>
                <Image
                  className="light-version-logo"
                  src="assets/media/logo.svg"
                  alt="logo"
                  width={187}
                  height={60}
                  priority
                />
              </Link>
              <Link href="/" replace>
                <Image
                  className="dark-version-logo"
                  src="assets/media/logo-3.svg"
                  alt="logo"
                  width={187}
                  height={60}
                />
              </Link>
              <Link href="/" replace>
                <Image
                  className="sticky-logo"
                  src="assets/media/logo-2.svg"
                  alt="logo"
                  width={187}
                  height={60}
                />
              </Link>
            </div>
            <div className="header-main-nav">
              {/* Start Mainmanu Nav */}
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link href="/">
                        <Image
                          className="light-mode"
                          src="assets/media/logo-2.svg"
                          alt="Site Logo"
                          width={187}
                          height={60}
                        />
                        <Image
                          className="dark-mode"
                          src="assets/media/logo-3.svg"
                          alt="Site Logo"
                          width={187}
                          height={60}
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
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/blog" ? "active" : ""}
                      href={"/blog"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/our-team" ? "active" : ""}
                      href={"/our-team"}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/contact" ? "active" : ""}
                      href={"/contact"}
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
