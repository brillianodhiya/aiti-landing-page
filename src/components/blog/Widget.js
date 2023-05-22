import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Widget = () => {
  return (
    <div className="col-lg-4">
      <div className="axil-sidebar">
        <div className="widget widget-search">
          <h4 className="widget-title">Search</h4>
          <form action="#" className="blog-search">
            <input type="text" placeholder="Search…" />
            <button className="search-button">
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
        <div className="widget widget-categories">
          <h4 className="widget-title">Categories</h4>
          <ul className="category-list list-unstyled">
            <li>
              <Link href="blog-category.html">Agency news</Link>
            </li>
            <li>
              <Link href="blog-category.html">Digital Marketing</Link>
            </li>
            <li>
              <Link href="blog-category.html">Information technology</Link>
            </li>
            <li>
              <Link href="blog-category.html">New ideas</Link>
            </li>
            <li>
              <Link href="blog-category.html">Uncategorized</Link>
            </li>
            <li>
              <Link href="blog-category.html">Marketing &amp; branding</Link>
            </li>
          </ul>
        </div>
        <div className="widget widge-social-share">
          <div className="blog-share">
            <h5 className="title">Follow:</h5>
            <ul className="social-list list-unstyled">
              <li>
                <Link href="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget widget-recent-post">
          <h4 className="widget-title">Recent post</h4>
          <div className="post-list-wrap">
            <div className="single-post">
              <div className="post-thumbnail">
                <Link href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-5.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </Link>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <Link href="single-blog.html">
                    Take ownership and question the status quo in.
                  </Link>
                </h6>
                <ul className="blog-meta list-unstyled">
                  <li>Sep 10, 2021</li>
                  <li>9 min to read</li>
                </ul>
              </div>
            </div>
            <div className="single-post">
              <div className="post-thumbnail">
                <Link href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-6.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </Link>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <Link href="single-blog.html">
                    Take ownership and question the status quo in.
                  </Link>
                </h6>
                <ul className="blog-meta list-unstyled">
                  <li>Sep 15, 2021</li>
                  <li>15 min to read</li>
                </ul>
              </div>
            </div>
            <div className="single-post">
              <div className="post-thumbnail">
                <Link href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-7.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </Link>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <Link href="single-blog.html">
                    Take ownership and question the status quo in.
                  </Link>
                </h6>
                <ul className="blog-meta list-unstyled">
                  <li>Sep 5, 2021</li>
                  <li>8 min to read</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="widget widget-banner-ad">
          <Link href="#">
            <Image
              src="/assets/media/banner/widget-banner.png"
              alt="banner"
              width={390}
              height={778}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
