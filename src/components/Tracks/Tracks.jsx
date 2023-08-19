import React, { useState } from "react";
import Tabdetails from "../utils/Tabdetails";

const Tracks = () => {
  const [step, setStep] = useState(0);
  const tabs = [
    {
      name: "DEPIN",
    },
    {
      name: "Artificial Intelligence",
    },
    {
      name: "DeFi & Payments",
    },
    {
      name: "GAMING",
    },
    {
      name: "Mobile Consumer dApps",
    },
    {
      name: "Infrastructure Businesses",
    },
    {
      name: "DAOS & NETWORK STATES",
    },
  ];
  return (
    <div className="mb-5">
      <div className="container sec_bg">
        <div>
          <div className="tracks">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="track d-flex align-items-center gap-1"
              >
                <div
                  className={
                    step === index ? "active_border btn_border" : "btn_border"
                  }
                >
                  <p></p>
                  <p></p>
                </div>

                <button
                  className={step === index && "active_btn"}
                  onClick={() => setStep(index)}
                >
                  {tab.name}
                </button>
                <div
                  className={
                    step === index ? "active_border btn_border" : "btn_border"
                  }
                >
                  <p></p>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
          {step === 0 && (
            <Tabdetails
              children1="DEPIN"
              children2="DESIGN CRYPTO INCENTIVIZES TO BUILD PHYSICAL INFRASTRUCTURE NETWORKS TO DISRUPT TRADITIONAL INCUMBANTS."
            />
          )}
          {step === 1 && (
            <Tabdetails
              children1="Artificial Intelligence"
              children2="COMBINE AI WITH CRYPTO TO ACCELERATE YOUR CRYPTO PRODUCT."
            />
          )}
          {step === 2 && (
            <Tabdetails
              children1="DeFi & Payments"
              children2="LEAVE TRADITIONAL FINANCE BEHIND. DESIGN NEW DECENTRALIZED APPLICATIONS FOR A MORE OPEN FINANCIAL SYSTEM."
            />
          )}
          {step === 3 && (
            <Tabdetails
              children1="GAMING"
              children2="CREATE THE FUTURE OF GAMING. SHAPE BLOCKCHAIN-BASED GAMES, NFTS, AND MORE TO ALLOW PLAYERS TO DIRECTLY INTERACT WITH P2P MARKETS."
            />
          )}
          {step === 4 && (
            <Tabdetails
              children1="Mobile Consumer dApps"
              children2="BUILD THE NEXT GENERATION OF MOBILE WEB PRODUCTS ON CRYPTO TO ONBOARD A BILLION USERS."
            />
          )}
          {step === 5 && (
            <Tabdetails
              children1="Infrastructure Businesses"
              children2="BUILD THE ROBUST TOOLS AND INFRASTRUCTURE TO POWER DAPPS ACROSS THE SOLANA ECOSYSTEM."
            />
          )}
          {step === 6 && (
            <Tabdetails
              children1="DAOS & NETWORK STATES"
              children2="CREATE TOOLS AND FORM PURPOSE-DRIVEN COMMUNITIES."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
