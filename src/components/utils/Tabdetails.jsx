import React from "react";
import icon from "../../assets/tracks-tab-icon.png";
import line from "../../assets/track-details-line.png";
import solana from "../../assets/solana.png";

const Tabdetails = ({children1,children2}) => {
  const prizes = [
    {
      name: "FIRST PRIZE",
      amount: "$30,000",
    },
    {
      name: "SECOND PRIZE",
      amount: "$20,000",
    },
    {
      name: "THIRD PRIZE",
      amount: "$15,000",
    },
    {
      name: "FOURTH PRIZE",
      amount: "$10,000",
    },
    {
      name: "FIFTH PRIZE",
      amount: "$5,000",
    },
  ];
  return (
    <div className="tab_details">
      <div className="row mx-0">
        <div className="col-12 col-lg-6">
          <div className="d-flex align-items-start gap-3">
            <img className="img-fluid" src={icon} alt="" />
            <div>
              <h1>{children1}</h1>
              <h6>
               {children2}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6"></div>
      </div>
      <div className="row mx-0">
        <div className="col-12 col-lg-6"></div>
        <div className="col-12 col-lg-6 prize_bg ">
          <img className="img-fluid mb-3" src={line} alt="" />
          <p>OrSsEohor5xdyl <span></span> <span></span></p>
          <button>// PRIZES</button>
        </div>
      </div>
      <div className="row align-items-end mx-0">
        <div className="col-12 col-lg-6">
          <p>PRESENTED BY</p>
          <img className="img-fluid" src={solana} alt="" />
        </div>
        <div className="col-12 col-lg-6">
          {prizes.map((prize, index) => (
            <div key={index} className="prize_list">
              <p>{prize.name}</p>
              <p>{prize.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabdetails;
