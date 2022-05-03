import React from "react";
import "../HomePage/homepage.css";
import iso from "../HomePage/assets/iso.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
function Homepage() {
  return (
    <div className="relative flex" style={{ backgroundColor: "#fbf7f4" }}>
      <div className="left-container relative flex flex-col p-10 pl-20 justify-center items-start">
        <div className="headings relative flex flex-col  p-2 m-4 justify-center items-start">
          <span className="heading-first relative text-5xl m-2 font-semibold">
            Simple GST Billing <span className="relative font-thin">&</span>{" "}
            Stock Management
          </span>
          <span className="heading-second relative text-4xl m-2 font-medium">
            software for your business
          </span>
          <span className="heading-third relative text-1xl m-2 font-semibold text-gray-600">
            Atma Nirbhar Vyapaari bane
          </span>
        </div>
        <div className="end-element absolute bottom-0 left-0 flex m-4 p-2 pl-20">
          <span className="made-in-india relative m-4 font-semibold text-gray-600">
            Made with ❤️ in India
          </span>
          <div className="iso-certification relative flex items-center justify-center ml-10">
            <img src={iso} alt="iso_image" className="relative block h-6 w-6" />
            <span className="relative iso-title m-2 font-bold text-black">
              ISO Certified
            </span>
          </div>
        </div>
      </div>
      <div className="right-container relative flex flex-col items-start m-20 p-2 border-2 rounded-xl bg-white">
        <span className="title relative text-2xl font-semibold text-gray-700 m-8">
          Login to myBillBook
        </span>
        <div className="mobile-number relative flex flex-col w-full items-start">
          <span className="mobile-text relative text-base font-semibold text-gray-400 mt-2 ml-8">
            Enter Mobile Number
          </span>
          <div className="number relative flex w-full mt-2 ml-8">
            <span
              className="relative flex items-center justify-center p-2"
              style={{
                backgroundColor: "lightGray",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              +91
            </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                flex: 1,
                marginRight: "50px",
              }}
            />
          </div>
        </div>
        <div className="otprelative flex flex-col w-full items-start">
          <span className="otp-text relative text-base font-semibold text-gray-400 mt-2 ml-8">
            Enter OTP
          </span>
          <div className="otp-input flex w-full mt-2 ml-8">
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                flex: 1,
                marginRight: "50px",
              }}
            />
          </div>
        </div>
        <span className="timer relative text-base font-semibold text-gray-400 mt-2 ml-8">
          Resend OTP in time seconds{" "}
        </span>
        <Button variant="contained">Contained</Button>
      </div>
    </div>
  );
}

export default Homepage;
