import React from "react";
import Navbar from "../NavBar/Navbar";
import Homepage from "../HomePage/Homepage";
import Statistics from "../Statistics/Statistics";
import MoneyBack from "../MoneyBack/MoneyBack";
import Subscription from "../SubscriptionComponent/Subscription";
import Footer from "../Footer/Footer";
function DisplayPage() {
  return (
    <div className="relative block">
      <Navbar />
      <Homepage />
      <Statistics />
      <MoneyBack />
      <Subscription />
      <Footer />
    </div>
  );
}

export default DisplayPage;
