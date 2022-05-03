import React from "react";
import SocialComponent from "../SocialComponent/SocialComponent";
import MiddleLeft from "../MiddleLeft/MiddleLeft";
import MiddleRight from "../MiddleRight/MiddleRight";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./footer.css";
function Footer() {
  const middleLeft = [
    {
      id: 1,
      description: "Refund Policy",
    },
    {
      id: 2,
      description: "Privacy Policy",
    },
    {
      id: 3,
      description: "Terms & Conditions",
    },
  ];

  const middleRight = [
    {
      id: 1,
      description: "FAQ's",
    },
    {
      id: 2,
      description: "Pricing",
    },
    {
      id: 3,
      description: "Flobiz Business Group",
    },
    {
      id: 4,
      description: "blogs",
    },
  ];

  const socialIcons = [
    {
      id: 1,
      title: "YouTube",
    },
    {
      id: 2,
      title: "Facebook",
    },
    {
      id: 3,
      title: "Instagram",
    },
    {
      id: 4,
      title: "Twitter",
    },
    {
      id: 5,
      title: "Linkedin",
    },
  ];

  return (
    <div
      className="footer relative flex items-center justify-between pl-40 pr-40 pb-10"
    >
      <div className="leftFooter relative flex flex-col items-start">
        <span className="heading relative block font-semibold text-orange-600 text-lg mt-2">
          Get in Touch
        </span>
        <span className="helpemail relative block font-semibold mt-2">
          help@floboz.in
        </span>
        <span className="helpphone relative block font-semibold text-2xl mt-2">
          +91 74004 17400
        </span>
        <div className="socialconnect relative flex mt-4">
          <SocialComponent name="WhatApp us" type="WhatsApp" />
          <SocialComponent name="Chat with us" type="Chat" />
        </div>
      </div>
      <div className="middleFooter relative flex flex-col items-start">
        <span className="heading relative block font-semibold text-orange-600 text-lg mt-2">
          Information
        </span>
        <div className="middleContent relative flex justify-start">
          <div className="middleLeft relative flex flex-col items-start mr-20 text-lg font-semibold">
            {middleLeft.map(({ id, description }) => (
              <MiddleLeft key={id} description={description} />
            ))}
          </div>
          <div className="middleRight relative flex flex-col items-start mr-20 text-lg font-semibold">
            {middleRight.map(({ id, description }) => (
              <MiddleRight key={id} description={description} />
            ))}
          </div>
        </div>
      </div>
      <div className="rightFooter relative flex flex-col items-start">
        <span className="heading relative block font-semibold text-orange-600 text-lg mt-2">
          Follow us
        </span>
        <div className="icons relative flex">
          {socialIcons.map(({ id, title }) => (
            <SocialIcons key={id} title={title} />
          ))}
        </div>
        <span className="social-text relative block font-semibold mt-2">
          FloBooks is a product by <a href="/" style={{color:"blue",textDecoration:"underline"}}>Flobiz</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
