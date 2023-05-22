import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <section className="section section-padding bg-color-dark">
      <div className="container">
        <div className="section-heading heading-light-left">
          <span className="subtitle">Beberapa Teknologi kami</span>
          <h2 className="title">Teknologi yang kami gunakan</h2>
          <p>
            Kami menggunakan teknologi terbaru untuk membangun aplikasi yang
            luar biasa.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
          >
            <div
              className="brand-grid active"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={240}
                height={133}
                src="/assets/media/icon/nodejs.png"
                alt="NodeJs"
                style={{
                  marginTop: "4px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={100}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={140}
                height={140}
                src="/assets/media/icon/reactjs.png"
                alt="Reactjs"
                style={{
                  marginTop: "40px",
                  // marginLeft: "12px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={200}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={140}
                height={140}
                src="/assets/media/icon/nextjs2.png"
                alt="Nextjs"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={300}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={180}
                height={133}
                src="/assets/media/icon/storybook.png"
                alt="Storybook"
                style={{
                  marginTop: "50px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={400}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={260}
                height={133}
                src="/assets/media/icon/solidjs.png"
                alt="SolidJs"
                style={{
                  marginTop: "20px",
                  // marginLeft: "-10px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={500}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={220}
                height={133}
                src="/assets/media/icon/docker2.png"
                alt="Docker"
                style={{
                  marginTop: "16px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={600}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={160}
                height={133}
                src="/assets/media/icon/redis.png"
                alt="Redis"
                style={{
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={200}
                height={133}
                src="/assets/media/icon/rabbitmq1.png"
                alt="Rebbit MQ"
                style={{
                  marginTop: "30px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={230}
                height={133}
                src="/assets/media/icon/firebase.png"
                alt="Rebbit MQ"
                style={{
                  marginTop: "30px",
                  // marginLeft: "14px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={200}
                height={133}
                src="/assets/media/icon/mongodb.png"
                alt="Mongo DB"
                style={{
                  marginTop: "56px",
                  // marginLeft: "14px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={160}
                height={133}
                src="/assets/media/icon/vercel.png"
                alt="Vercel"
                style={{
                  marginTop: "66px",
                  // marginLeft: "14px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={100}
                height={100}
                src="/assets/media/icon/hashrock_simple.png"
                alt="Deno"
                style={{
                  marginTop: "30px",
                  // marginLeft: "44px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={80}
                height={80}
                src="/assets/media/icon/ai.png"
                alt="Adobe Illustrator"
                style={{
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={50}
                height={50}
                src="/assets/media/icon/figma.png"
                alt="Figma"
                style={{
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={80}
                height={80}
                src="/assets/media/icon/ibispaint.png"
                alt="Ibis Paint"
                style={{
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div
              className="brand-grid"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                width={80}
                height={80}
                src="/assets/media/icon/procreate.png"
                alt="Procreate"
                style={{
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-2 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={663}
            height={663}
            src="/assets/media/others/circle-1.png"
            alt="circle"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={550}
            height={550}
            src="/assets/media/others/line-3.png"
            alt="circle"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={114}
            height={114}
            src="/assets/media/others/bubble-3.png"
            alt="circle"
          />
        </li>
      </ul>
    </section>
  );
};

export default Brand;
