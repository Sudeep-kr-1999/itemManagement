import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../axios/axios";
import "../HomePage/homepage.css";
import iso from "../HomePage/assets/iso.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
function Homepage() {
  let navigate = useNavigate();
  const [phoneNumber, setphoneNumber] = useState("");
  const [otp, setotp] = useState("");
  const clearTimeOut = useRef(null);

  const setPhoneandFindOTP = useCallback((value) => {
    setphoneNumber(value);
  }, []);

  const loginFunction = useCallback(() => {
    console.log(phoneNumber);
    console.log(otp);
    console.log("login");
    API.post(`authenticate`, { mobile_number: phoneNumber, otp_code: otp })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data.mobile_number === phoneNumber) {
            console.log("data verified");
            navigate("dashboard");
            localStorage.setItem("currentUserPhoneNumber", phoneNumber);
          }
        }
      })
      .catch((error) => alert("Some error occured please try again"));
  }, [otp, phoneNumber, navigate]);

  const callAPI = useCallback(() => {
    clearTimeout(clearTimeOut.current);
    clearTimeOut.current = setTimeout(() => {
      API.post(`request_otp`, { mobile_number: phoneNumber })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch((error) => alert("Some Error Occured please try again"));
    }, 500);
  }, [phoneNumber]);

  useEffect(() => {
    if (phoneNumber.length === 10) {
      callAPI();
    }
  }, [phoneNumber]);

  return (
    <div className="home-parent relative block">
      <div
        className="homepage relative flex"
        style={{ backgroundColor: "#fbf7f4" }}
      >
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
              <img
                src={iso}
                alt="iso_image"
                className="relative block h-6 w-6"
              />
              <span className="relative iso-title m-2 font-bold text-black">
                ISO Certified
              </span>
            </div>
          </div>
        </div>
        <div className="right-container relative flex flex-col items-start m-20 p-4 border-2 rounded-xl bg-white">
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
                value={phoneNumber}
                onChange={(event) => setPhoneandFindOTP(event.target.value)}
                sx={{
                  flex: 1,
                  marginRight: "50px",
                }}
              />
            </div>
          </div>
          <div className="otp relative flex flex-col w-full items-start">
            <span className="otp-text relative text-base font-semibold text-gray-400 mt-6 ml-8">
              Enter OTP
            </span>
            <div className="otp-input flex w-full mt-2 ml-8">
              <TextField
                label="One Time Password"
                id="outlined-basic"
                variant="outlined"
                value={otp}
                onChange={(event) => setotp(event.target.value)}
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
          <div
            className="submitBtn relative flex items-start ml-8 mt-2"
            style={{ width: "25rem" }}
          >
            <Button
              variant="contained"
              onClick={loginFunction}
              sx={{
                width: "25rem",
                marginTop: "20px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
