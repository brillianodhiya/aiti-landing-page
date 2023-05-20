import Image from "next/image";
import React from "react";

export const Posts = () => {
  return (
    <div className="col-lg-8">
      <div className="blog-grid">
        <h3 className="title">
          <a href="single-blog.html">
            How to Increase Your ROI Through scientific SEM?
          </a>
        </h3>
        <div className="author">
          <div className="author-thumb">
            <Image
              src="/assets/media/blog/author-1.png"
              alt="Blog Author"
              width={80}
              height={80}
            />
          </div>
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 10, 2021</li>
              <li>9 min to read</li>
            </ul>
          </div>
        </div>
        <div className="post-thumbnail">
          <a href="single-blog.html">
            <Image
              src="/assets/media/blog/blog-3.png"
              alt="Blog"
              width={850}
              height={450}
            />
          </a>
        </div>
        <p>
          Want to know the one thing that every successful digital marketer does
          first to ensure they get the biggest return on their marketing budget?
          It’s simple: goal-setting. This is an absolutely essential practice
          for any digital marketer who knows how to execute their campaigns
        </p>
        <a href="single-blog.html" className="axil-btn btn-borderd btn-large">
          Read More
        </a>
      </div>
      <div className="blog-grid blog-without-thumb">
        <h3 className="title">
          <a href="single-blog.html">Twice Profit Than Before You Ever Got</a>
        </h3>
        <div className="author">
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 9, 2021</li>
              <li>15 min to read</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-grid">
        <h3 className="title">
          <a href="single-blog.html">Cloud Hosting Growing Faster Ever</a>
        </h3>
        <div className="author">
          <div className="author-thumb">
            <Image
              src="/assets/media/blog/author-2.png"
              alt="Blog Author"
              width={80}
              height={80}
            />
          </div>
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 7, 2021</li>
              <li>5 min to read</li>
            </ul>
          </div>
        </div>
        <div className="post-thumbnail">
          <a href="single-blog.html">
            <Image
              src="/assets/media/blog/blog-4.png"
              alt="Blog"
              width={850}
              height={450}
            />
          </a>
        </div>
        <p>
          Want to know the one thing that every successful digital marketer does
          first to ensure they get the biggest return on their marketing budget?
          It’s simple: goal-setting. This is an absolutely essential practice
          for any digital marketer who knows how to execute their campaigns...
        </p>
        <a href="single-blog.html" className="axil-btn btn-borderd btn-large">
          Read More
        </a>
      </div>
      <div className="blog-grid blog-without-thumb">
        <blockquote>
          <h5 className="title">
            <a href="single-blog-quote.html">
              “ The goal of a designer is to listen, observe, understand,
              sympathize, empathize, synthesize, and glean insights that enable
              him or her to make the invisible visible ”
            </a>
          </h5>
        </blockquote>
        <div className="author">
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 12, 2021</li>
              <li>10 min to read</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-grid blog-thumb-slide">
        <h3 className="title">
          <a href="single-blog-gallery.html">
            eCommerce Marketing Statistics You Should Know in 2021.
          </a>
        </h3>
        <div className="author">
          <div className="author-thumb">
            <Image
              src="/assets/media/blog/author-2.png"
              alt="Blog Author"
              width={80}
              height={80}
            />
          </div>
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 15, 2021</li>
              <li>8 min to read</li>
            </ul>
          </div>
        </div>
        <div className="post-thumbnail">
          <div
            className="slick-slider slick-arrow-nav slick-dot-nav"
            data-slick='{"infinite": true, "autoplay": true, "arrows": true, "dots": true, "slidesToShow": 1}'
          >
            <div className="slick-slide">
              <a href="single-blog.html">
                <Image
                  src="/assets/media/blog/blog-3.png"
                  alt="Blog"
                  width={850}
                  height={450}
                />
              </a>
            </div>
            <div className="slick-slide">
              <a href="single-blog.html">
                <Image
                  src="/assets/media/blog/blog-4.png"
                  alt="Blog"
                  width={850}
                  height={450}
                />
              </a>
            </div>
          </div>
        </div>
        <p>
          Above all, think of life as a prototype. We can conduct experiments,
          make discoveries, and change our perspectives. We can look for
          opportunities to turn processes into projects that have tangible
          outcomes. We can learn how to take joy in the things we create whether
          they take the form of a fleeting experience or an heirloom that will
          last for generations.
        </p>
        <a
          href="single-blog-gallery.html"
          className="axil-btn btn-borderd btn-large"
        >
          Read More
        </a>
      </div>
      <div className="blog-grid mb-0">
        <h3 className="title">
          <a href="single-blog-video.html">
            Follow your own design process, whatever gets you to the outcome.
          </a>
        </h3>
        <div className="author">
          <div className="author-thumb">
            <Image
              src="/assets/media/blog/author-2.png"
              alt="Blog Author"
              width={80}
              height={80}
            />
          </div>
          <div className="info">
            <h6 className="author-name">Theresa Underwood</h6>
            <ul className="blog-meta list-unstyled">
              <li>Sep 10, 2021</li>
              <li>9 min to read</li>
            </ul>
          </div>
        </div>
        <div className="post-thumbnail">
          <a href="single-blog-video.html">
            <Image
              src="/assets/media/blog/blog-4.png"
              alt="Blog"
              width={850}
              height={450}
            />
          </a>
          <div className="popup-video">
            <a
              href="../../../watch.html?v=1iIZeIy7TqM"
              className="play-btn popup-youtube"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
        <p>
          Above all, think of life as a prototype. We can conduct experiments,
          make discoveries, and change our perspectives. We can look for
          opportunities to turn processes into projects that have tangible
          outcomes. We can learn how to take joy in the things we create whether
          they take the form of a fleeting experience or an heirloom that will
          last for generations.
        </p>
        <a
          href="single-blog-video.html"
          className="axil-btn btn-borderd btn-large"
        >
          Read More
        </a>
      </div>
      <div className="pagination">
        <ul>
          <li>
            <a className="prev page-numbers" href="#">
              <i className="fal fa-arrow-left"></i>
            </a>
          </li>
          <li>
            <a href="#" className="page-numbers current">
              1
            </a>
          </li>
          <li>
            <a className="page-numbers" href="#">
              2
            </a>
          </li>
          <li>
            <a className="page-numbers" href="#">
              3
            </a>
          </li>
          <li>
            <a className="page-numbers" href="#">
              4
            </a>
          </li>
          <li>
            <a className="page-numbers" href="#">
              5
            </a>
          </li>
          <li>
            <a className="next page-numbers" href="#">
              <i className="fal fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
