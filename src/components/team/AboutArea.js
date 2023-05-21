import Image from "next/image";
import React from "react";

export const AboutArea = () => {
  return (
    <section className="section section-padding-equal">
      <div className="container">
        <div className="section-heading">
          <span className="subtitle">Experts in field</span>
          <h2 className="title">
            Design startup <br /> movement
          </h2>
        </div>
        <div className="about-expert">
          <div className="thumbnail">
            <Image
              src="/assets/media/about/about-1.png"
              alt="Thumbnail"
              width={1070}
              height={710}
            />
            <div className="popup-video">
              <a
                href="../../../watch.html?v=1iIZeIy7TqM"
                className="play-btn popup-youtube"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <ul className="frame-shape">
            <li className="shape shape-1">
              <Image
                src="/assets/media/about/frame-1.png"
                alt="Frame"
                width={274}
                height={420}
              />
            </li>
            <li className="shape shape-2">
              <Image
                src="/assets/media/about/frame-2.png"
                width={255}
                height={390}
                alt="Frame"
              />
            </li>
          </ul>
        </div>
      </div>
      <ul className="shape-group-16 list-unstyled">
        <li className="shape shape-1">
          <Image
            src="/assets/media/others/circle-2.png"
            width={886}
            height={888}
            alt="circle"
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="/assets/media/others/bubble-2.png"
            height={150}
            width={150}
            alt="Line"
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="/assets/media/others/bubble-1.png"
            height={88}
            width={88}
            alt="Line"
          />
        </li>
      </ul>
    </section>
  );
};
