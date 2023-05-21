import Image from "next/image";
import React from "react";
import { Comments } from "./Comments";
import Link from "next/link";

export const Post = () => {
  return (
    <div className="col-lg-8">
      <div className="single-blog">
        <div className="single-blog-content blog-grid">
          <div className="post-thumbnail">
            <Image
              src="/assets/media/blog/blog-3.png"
              alt="Blog"
              width={850}
              height={450}
            />
          </div>
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
          <p>
            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
            lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
            tristique libero at dui sodales, et placerat orci lobortis. Maecenas
            ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
          </p>
          <p>
            Habitasse per feugiat aliquam luctus accumsan curae, suspendisse
            aliquam taciti eros neque, aenean sit iaculis risus commodo ut
            sociosqu rhoncus potenti tristique placerat sit tempus, duis erat
            feugiat cras sociosqu porta ut praesent, fermentum donec convallis
            tellus vulputate duis nibh rhoncus phasellus dui massa nisl.
          </p>
          <p>
            {" "}
            Whether you’re kicking off a new campaign or looking to revamp your
            strategy, the lessons you’ll learn will be universal to all small
            business email marketing.
          </p>
          <p className="mb--80">
            MailChimp is an email marketing service provider founded in 2001. It
            has 9 million users that collectively send over 15 billion emails
            through the service each month.
          </p>
          <h3 className="title mb--30">Habitasse per feugiat aliquam luctus</h3>
          <p>
            Email is a crucial channel in any marketing mix, and never has this
            been truer than for today’s entrepreneur. Curious what to say? How
            to say it? How often to hit “send”? Each bite-sized lesson delivers
            core concepts, guiding questions, and tactical how-to resources.
          </p>
          <p>
            Whether you’re kicking off a new campaign or looking to revamp your
            strategy, the lessons you’ll learn will be universal to all small
            business email marketing.
          </p>
          <div className="blog-grid blog-without-thumb mt--80">
            <blockquote>
              <h5 className="title">
                <Link href="single-blog.html">
                  “ Donec metus lorem, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                  velit. ”
                </Link>
              </h5>
            </blockquote>
            <div className="author">
              <div className="info">
                <h6 className="author-name">Theresa Underwood</h6>
                <ul className="blog-meta list-unstyled">
                  <li>Sep 5, 2021</li>
                  <li>15 min to read</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 className="title mb--30">
            Habitasse per feugiat aliquam luctus accumsan curae
          </h3>
          <p className="mb--40">
            Email is a crucial channel in any marketing mix, and never has this
            been truer than for today’s entrepreneur. Curious what to say? How
            to say it? How often to hit “send”? Each bite-sized lesson delivers
            core concepts, guiding questions, and tactical how-to resources.
          </p>
          <div className="row">
            <div className="col-6">
              <div className="featured-Image">
                <Image
                  src="/assets/media/blog/blog-8.png"
                  alt="Blog"
                  width={410}
                  height={280}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="featured-Image">
                <Image
                  src="/assets/media/blog/blog-9.png"
                  alt="Blog"
                  width={410}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-author">
          <div className="author">
            <div className="author-thumb">
              <Image
                src="/assets/media/blog/author-3.png"
                alt="Blog Author"
                width={100}
                height={100}
              />
            </div>
            <div className="info">
              <h5 className="title">
                <a href="#">Theresa Underwood</a>
              </h5>
              <p>
                Email is a crucial channel in any marketing mix, and never has
                this been truer than for today’s entrepreneur. Curious what to
                say.
              </p>
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
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
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
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </div>
  );
};
