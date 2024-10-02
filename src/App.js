import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddFood from "./Pages/Admin/AddFood";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import DeleteFood from "./Pages/Admin/DeleteFood";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFood" element={<AddFood />} />
        <Route path="/deleteFood" element={<DeleteFood />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
