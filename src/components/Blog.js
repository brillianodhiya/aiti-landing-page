import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="section section-padding-equal">
      <div className="container">
        <div className="section-heading">
          <span className="subtitle">{"What's"} Going On</span>
          <h2 className="title">Latest stories</h2>
          <p>
            News From Abstrak And Around The World Of Web Design And Complete
            Solution of Online Digital Marketing{" "}
          </p>
        </div>
        <div className="row g-0">
          <div
            className="col-xl-6"
            data-sal="slide-right"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="blog-list active">
              <div className="post-thumbnail">
                <Link href="/single-blog/2">
                  <Image
                    width={300}
                    height={240}
                    src="/assets/media/blog/blog-1.png"
                    alt="Blog Post"
                  />
                </Link>
              </div>
              <div className="post-content">
                <h5 className="title">
                  <a href="single-blog-2.html">
                    How To Use a Remarketing Strategy To Get More
                  </a>
                </h5>
                <p>
                  Demand generation is a constant struggle for any business.
                  Each marketing strategy you employ has...
                </p>
                <a href="single-blog-2.html" className="more-btn">
                  Learn more
                  <i className="far fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6"
            data-sal="slide-left"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="blog-list border-start">
              <div className="post-thumbnail">
                <Link href="/single-blog/3">
                  <Image
                    width={300}
                    height={240}
                    src="/assets/media/blog/blog-2.png"
                    alt="Blog Post"
                  />
                </Link>
              </div>
              <div className="post-content">
                <h5 className="title">
                  <a href="single-blog-3.html">
                    SEO Statistics You Should Know in 2021
                  </a>
                </h5>
                <p>
                  Organic search has the potential to capture more than 40
                  percent of your gross revenue...
                </p>
                <a href="single-blog-3.html" className="more-btn">
                  Learn more
                  <i className="far fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-1 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={88}
            height={88}
            src="/assets/media/others/bubble-1.png"
            alt="bubble"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={1481}
            height={265}
            src="/assets/media/others/line-1.png"
            alt="bubble"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={1481}
            height={266}
            src="/assets/media/others/line-2.png"
            alt="bubble"
          />
        </li>
        <li className="shape shape-4">
          <Image
            width={150}
            height={150}
            src="/assets/media/others/bubble-2.png"
            alt="bubble"
          />
        </li>
      </ul>
    </section>
  );
};

export default Blog;
