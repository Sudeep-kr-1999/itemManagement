import React from "react";
import SubscriptionCards from "../SubscriptionCards/SubscriptionCards";
function Subscription() {
  const plans = [
    {
      id: 1,
      planName: "Silver Plan",
      previousRate: "1299",
      currentRate: "799/year",
      devices: "Mobile + Desktop",
      isMostPopular: false,
      customcolor: "#485eb0",
      backgroundcustomcolor: "#7f8ec8",
      features: [
        {
          fid: 1,
          tickType: "single",
          title: "Unlimited Stock Adjustments",
        },
        {
          fid: 2,
          tickType: "single",
          title: "GST Reports, Profit & Loss Report",
        },
        {
          fid: 3,
          tickType: "single",
          title: "Remove MyBillBook logo from invoice",
        },
        {
          fid: 4,
          tickType: "single",
          title: "Only Mobile device supported",
        },
        {
          fid: 5,
          tickType: "single",
          title: "+5 more features",
        },
      ],
    },
    {
      id: 2,
      planName: "Golden Plan",
      previousRate: "1299",
      currentRate: "1799/year",
      devices: "Mobile + Desktop",
      isMostPopular: true,
      customcolor: "#dba249",
      backgroundcustomcolor: "#e4bb7a",
      features: [
        {
          fid: 1,
          tickType: "double",
          title: "All Silver Features",
        },
        {
          fid: 2,
          tickType: "single",
          title: "Add upto 5 Staff to My BillBook",
        },
        {
          fid: 3,
          tickType: "single",
          title: "Unlimited Mobile + Desktop Logins",
        },
      ],
    },
    {
      id: 3,
      planName: "Diamond Plan",
      currentRate: "3500/year",
      previousRate: "1299",
      devices: "Mobile + Desktop",
      isMostPopular: false,
      customcolor: "#db631a",
      backgroundcustomcolor: "#e6925f",
      features: [
        {
          fid: 1,
          tickType: "double",
          title: "All Gold & Silver Features",
        },
        {
          fid: 2,
          tickType: "single",
          title: "Add unlimited to My Billbook",
        },
      ],
    },
  ];
  return (
    <div
      className="subs-container relative flex items-center justify-evenly p-10"
    >
      {plans.map((element) => (
        <SubscriptionCards
          key={element.id}
          planName={element.planName}
          previousRate={element.previousRate}
          currentRate={element.currentRate}
          devices={element.devices}
          isMostPopular={element.isMostPopular}
          customcolor={element.customcolor}
          backgroundcustomcolor={element.backgroundcustomcolor}
          features={element.features}
        />
      ))}
    </div>
  );
}

export default Subscription;
