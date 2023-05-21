import React from "react";
import Image from "next/image";
export const LocationArea = () => {
  return (
    <section className="section section-padding bg-color-dark overflow-hidden">
      <div className="container">
        <div className="section-heading heading-light-left">
          <span className="subtitle">Find Us</span>
          <h2 className="title">Our office</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="office-location">
              <div className="thumbnail">
                <Image
                  src="/assets/media/others/location-1.png"
                  alt="Office"
                  width={300}
                  height={200}
                />
              </div>
              <div className="content">
                <h4 className="title">Virginia-HQ</h4>
                <p>435 Pouros Locks United States</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="office-location">
              <div className="thumbnail">
                <Image
                  src="/assets/media/others/location-2.png"
                  alt="Office"
                  width={300}
                  height={200}
                />
              </div>
              <div className="content">
                <h4 className="title">Nevada</h4>
                <p>46 Watsica Creek Suite 071 United States</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="office-location">
              <div className="thumbnail">
                <Image
                  src="/assets/media/others/location-3.png"
                  alt="Office"
                  width={300}
                  height={200}
                />
              </div>
              <div className="content">
                <h4 className="title">Columbia</h4>
                <p>7140 Wehner Tunnel Washington, D.C</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="office-location">
              <div className="thumbnail">
                <Image
                  src="/assets/media/others/location-4.png"
                  alt="Office"
                  width={300}
                  height={200}
                />
              </div>
              <div className="content">
                <h4 className="title">New Mexico</h4>
                <p>10 Maggie Valleys United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-11 list-unstyled">
        <li className="shape shape-1">
          <Image
            src="/assets/media/others/line-6.png"
            alt="line"
            width={1682}
            height={445}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="/assets/media/others/circle-3.png"
            alt="line"
            width={811}
            height={824}
          />
        </li>
      </ul>
    </section>
  );
};
