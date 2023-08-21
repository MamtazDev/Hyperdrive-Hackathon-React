import React from "react";
import play from "../assets/playButton.png";
import watch from "../assets/watchVideoLine.png";
import timer from "../assets/elementTimerBar.png";
import kickstart from "../assets/round_kickstart.png";
import venture from "../assets/venture.png";
import projects from "../assets/projects.png";
import developers from "../assets/devlopers.png";
import soalnaline from "../assets/solanaLine.png";

const KickStart = () => {
  return (
    <section>
      <div className="kickStart mb-5">
        <div className="container mb-2 bgRightDot">
          <div className="kickStartTop text-center">
            <div className="globeLine"></div>
            <div className="playVideo">
              <button className="playBtn">
                <img src={play} alt="Play" />
              </button>
            </div>
            <div className="videoText text-end">
              <span className="d-block">
                <button className="greenText">// WATCH VIDEO</button>
              </span>
              <img src={watch} alt="" />
              <div className="d-flex justify-content-end align-items-center gap-1 text-end">
                <p className="text-end">OrSsEohor5xdyl</p>
                <div className="grayDots"></div>
                <div className="grayLinevideo"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <article className="kickStartBottom">
                <span className="mb-3">
                  <span style={{ color: "#14F195" }}>Kickstart</span> your
                  <br className="d-none d-lg-block" /> Crypto Startup
                </span>
                <p>
                  The next big web3 project is being built now. During
                  Hyperdrive, you'll be able to bootstrap from idea to product
                  in six weeks. The winners will pitch to leading investors at
                  an exclusive demo day.
                </p>
              </article>
            </div>

            <div className="col-12 col-lg-7"></div>
          </div>
          <div className="kickStartInner ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5">
                <div className="lineLeftBg d-flex align-items-center gap-2">
                  <p>
                    WRuEMlsngaQJfrm
                    <img src={timer} alt="" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="lineRightBg justify-content-between d-flex align-items-center">
                  <p>// ABOUT</p>
                  <img src={kickstart} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-5"></div>
            <div className="col-12 col-lg-7">
              <div className="solanaHackathon">
                <span className="mb-1">
                  <span style={{ color: "#14F195" }}>
                    Solana ONLINE Hackathons:
                  </span>
                  Where elite
                  <br /> founders start their crypto journey
                </span>
                <img src={soalnaline} alt="" />
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={developers} alt="developers number" />
                  <div className="followers">
                    <p>48,000+</p>
                    <span>developers</span>
                  </div>
                </div>
                <div>
                  <img src={projects} alt="Projects launched" />
                  <div className="followers">
                    <p>3,000+</p>
                    <span>Projects launched</span>
                  </div>
                </div>
                <div>
                  <img src={venture} alt="in venture funding" />
                  <div className="followers">
                    <p>$600M+</p>
                    <span>in venture funding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KickStart;