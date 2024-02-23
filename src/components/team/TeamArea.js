import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AitiTeam } from "@aiti/data/TeamList";
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
          {AitiTeam.map((team, index) => {
            return (
              <div key={team.id.toString()} className="col-xl-3 col-sm-6">
                <div className="team-grid">
                  <div className="thumbnail">
                    <Link href={team.linkedln || team.url} target="_blank">
                      <Image
                        src={team.foto}
                        alt={team.nama}
                        width={128}
                        height={128}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link target="_blank" href={team.linkedln || team.url}>
                        {team.nama}
                      </Link>
                    </h4>
                    <span className="designation">{team.jabatan}</span>
                    <span className="designation">{team.jabatan2}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="col-xl-3 col-sm-6">
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
          </div> */}
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
