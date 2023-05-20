import React from "react";

export const SectionContainer = () => {
  return (
    <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#section1">
              Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section2">
              Development
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section3">
              Online Marketing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section4">
              Business
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section5">
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section6">
              Content Strategy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
