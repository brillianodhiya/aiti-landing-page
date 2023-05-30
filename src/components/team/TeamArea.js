import React from "react";
import Image from "next/image";
import Link from "next/link";
export const TeamArea = () => {
  return (
    <section className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
      <div className="container">
        <div className="section-heading heading-light">
          <span className="subtitle">Tim yang berpengalaman sesuai bidang</span>
          <h2 className="title mb--50">
            Tim kami yang berpengalaman sesuai bidang
          </h2>
          <p>
            Kami memiliki tim yang berpengalaman dalam bidang desain dan
            pengembangan aplikasi. Kami berkomitmen untuk memberikan solusi
            digital kreatif untuk bisnis Anda.
          </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid active">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/brilli.png"
                    alt="CEO"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">
                    Brilliano Dhiya Ulhaq
                  </Link>
                </h4>
                <span className="designation">Project Manager</span>
                <span className="designation">Developer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-2.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Dian Candra Pribadi</Link>
                </h4>
                <span className="designation">Lead Research</span>
                <span className="designation">Producer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-3.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Darlene Robertson</Link>
                </h4>
                <span className="designation">Implementation</span>
                <span className="designation">Specialist</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-4.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Marvin McKinney</Link>
                </h4>
                <span className="designation">Forward Interactions</span>
                <span className="designation">Developer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-5.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Ralph Edwards</Link>
                </h4>
                <span className="designation">Communications</span>
                <span className="designation">Strategist</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-6.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Kathryn Murphy</Link>
                </h4>
                <span className="designation">Lead Research</span>
                <span className="designation">Producer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-7.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Jane Cooper</Link>
                </h4>
                <span className="designation">Implementation</span>
                <span className="designation">Specialist</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="team-grid">
              <div className="thumbnail">
                <Link href="/our-team/single-team">
                  <Image
                    src="/assets/media/team/team-8.png"
                    alt="Team Member"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link href="/our-team/single-team">Cody Fisher</Link>
                </h4>
                <span className="designation">Forward Interactions</span>
                <span className="designation">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <Image
            src="/assets/media/others/circle-1.png"
            alt="Circle"
            width={663}
            height={663}
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="/assets/media/others/line-3.png"
            alt="Circle"
            width={550}
            height={550}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="/assets/media/others/bubble-5.png"
            alt="Circle"
            width={105}
            height={105}
          />
        </li>
      </ul>
    </section>
  );
};
