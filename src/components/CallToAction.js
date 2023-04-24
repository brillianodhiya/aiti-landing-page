import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="section call-to-action-area">
      <div className="container">
        <div className="call-to-action">
          <div className="section-heading heading-light">
            <span className="subtitle">{"Let's"} Work Together</span>
            <h2 className="title">Need a successful project?</h2>
            <Link href="/contact" className="axil-btn btn-large btn-fill-white">
              Estimate Project
            </Link>
          </div>
          <div className="thumbnail">
            <div
              className="larg-thumb"
              data-sal="zoom-in"
              data-sal-duration={600}
              data-sal-delay={100}
            >
              <Image
                width={624}
                height={400}
                src="/assets/media/others/pc.png"
                alt="Computer"
              />
            </div>
            <ul className="list-unstyled small-thumb">
              <li
                className="shape shape-1"
                data-sal="slide-right"
                data-sal-duration={800}
                data-sal-delay={400}
              >
                <Image
                  width={432}
                  height={152}
                  src="/assets/media/others/comment.png"
                  alt="Comments"
                />
              </li>
              <li
                className="shape shape-2"
                data-sal="slide-up"
                data-sal-duration={800}
                data-sal-delay={300}
              >
                <Image
                  width={455}
                  height={50}
                  src="/assets/media/others/keyboard.png"
                  alt="Comments"
                />
              </li>
              <li
                className="shape shape-3"
                data-sal="slide-right"
                data-sal-duration={800}
                data-sal-delay={300}
              >
                <Image
                  width={150}
                  height={60}
                  src="/assets/media/others/mouse.png"
                  alt="Comments"
                />
              </li>
              <li
                className="shape shape-4"
                data-sal="slide-left"
                data-sal-duration={800}
                data-sal-delay={300}
              >
                <Image
                  width={180}
                  height={194}
                  src="/assets/media/others/bell-icon.png"
                  alt="Comments"
                />
              </li>
              <li
                className="shape shape-5"
                data-sal="zoom-in"
                data-sal-duration={800}
                data-sal-delay={200}
              >
                <Image
                  width={330}
                  height={199}
                  src="/assets/media/others/chat-bot.png"
                  alt="Comments"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-9">
        <li className="shape shape-1">
          <Image
            width={601}
            height={289}
            src="/assets/media/others/bubble-12.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={24}
            height={24}
            src="/assets/media/others/bubble-16.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={75}
            height={75}
            src="/assets/media/others/bubble-13.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-4">
          <Image
            width={80}
            height={80}
            src="/assets/media/others/bubble-14.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-5">
          <Image
            width={24}
            height={24}
            src="/assets/media/others/bubble-16.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-6">
          <Image
            width={140}
            height={140}
            src="/assets/media/others/bubble-15.png"
            alt="Comments"
          />
        </li>
        <li className="shape shape-7">
          <Image
            width={24}
            height={24}
            src="/assets/media/others/bubble-16.png"
            alt="Comments"
          />
        </li>
      </ul>
    </section>
  );
};

export default CallToAction;
