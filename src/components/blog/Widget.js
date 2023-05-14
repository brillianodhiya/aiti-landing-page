import Image from "next/image";
import React from "react";

export const Widget = () => {
  return (
    <div class="col-lg-4">
      <div class="axil-sidebar">
        <div class="widget widget-search">
          <h4 class="widget-title">Search</h4>
          <form action="#" class="blog-search">
            <input type="text" placeholder="Search…" />
            <button class="search-button">
              <i class="fal fa-search"></i>
            </button>
          </form>
        </div>
        <div class="widget widget-categories">
          <h4 class="widget-title">Categories</h4>
          <ul class="category-list list-unstyled">
            <li>
              <a href="blog-category.html">Agency news</a>
            </li>
            <li>
              <a href="blog-category.html">Digital Marketing</a>
            </li>
            <li>
              <a href="blog-category.html">Information technology</a>
            </li>
            <li>
              <a href="blog-category.html">New ideas</a>
            </li>
            <li>
              <a href="blog-category.html">Uncategorized</a>
            </li>
            <li>
              <a href="blog-category.html">Marketing &amp; branding</a>
            </li>
          </ul>
        </div>
        <div class="widget widge-social-share">
          <div class="blog-share">
            <h5 class="title">Follow:</h5>
            <ul class="social-list list-unstyled">
              <li>
                <a href="../../../index.htm">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-1.htm">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-4.htm">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-3.htm">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-4.htm">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-8.htm">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="widget widget-recent-post">
          <h4 class="widget-title">Recent post</h4>
          <div class="post-list-wrap">
            <div class="single-post">
              <div class="post-thumbnail">
                <a href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-5.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </a>
              </div>
              <div class="post-content">
                <h6 class="title">
                  <a href="single-blog.html">
                    Take ownership and question the status quo in.
                  </a>
                </h6>
                <ul class="blog-meta list-unstyled">
                  <li>Sep 10, 2021</li>
                  <li>9 min to read</li>
                </ul>
              </div>
            </div>
            <div class="single-post">
              <div class="post-thumbnail">
                <a href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-6.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </a>
              </div>
              <div class="post-content">
                <h6 class="title">
                  <a href="single-blog.html">
                    Take ownership and question the status quo in.
                  </a>
                </h6>
                <ul class="blog-meta list-unstyled">
                  <li>Sep 15, 2021</li>
                  <li>15 min to read</li>
                </ul>
              </div>
            </div>
            <div class="single-post">
              <div class="post-thumbnail">
                <a href="single-blog.html">
                  <Image
                    src="/assets/media/blog/blog-7.png"
                    alt="Blog"
                    width={100}
                    height={80}
                  />
                </a>
              </div>
              <div class="post-content">
                <h6 class="title">
                  <a href="single-blog.html">
                    Take ownership and question the status quo in.
                  </a>
                </h6>
                <ul class="blog-meta list-unstyled">
                  <li>Sep 5, 2021</li>
                  <li>8 min to read</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="widget widget-banner-ad">
          <a href="#">
            <Image
              src="/assets/media/banner/widget-banner.png"
              alt="banner"
              width={390}
              height={778}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
