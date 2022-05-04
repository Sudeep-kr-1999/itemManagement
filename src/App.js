import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import DisplayPage from "./components/DisplayPage/DisplayPage";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
