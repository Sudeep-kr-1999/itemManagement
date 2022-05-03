import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Homepage from "./components/HomePage/Homepage";
import Statistics from "./components/Statistics/Statistics";
import MoneyBack from "./components/MoneyBack/MoneyBack";
import Subscription from "./components/SubscriptionComponent/Subscription";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Statistics />
      <MoneyBack/>
      <Subscription/>
    </div>
  );
}

export default App;
