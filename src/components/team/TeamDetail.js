import Image from "next/image";
import React from "react";

export const TeamDetail = () => {
  return (
    <section className="section-padding-equal team-details-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="team-details-content">
              <h2 className="title">Ralph Edwards</h2>
              <span className="subtitle">Communications Strategist</span>
              <ul className="social-share list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
              </ul>
              <p>
                Phasellus in libero et nunc malesuada tincidunt. Morbi auctor
                tristique semper. Nunc condimentum dapibus felis, non volutpat
                ligula dapibus non. Quisque varius massa magna, eget iaculis
                ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor.
                Morbi aliquam a justo eget cursus. Donec at quam id ex mollis
                dapibus eget ac sem. Maecenas pharetra bibendum massa, ut
                tincidunt lectus.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-thumb">
              <Image
                className="paralax-image"
                src="/assets/media/team/team-9.png"
                width={630}
                height={640}
                alt="Thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
