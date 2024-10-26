import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import FirstPage from "./Pages/Admin/FirstPage";
import AddFood from "./Pages/Admin/AddFood";
import LoadData from "./Pages/Admin/DeleteFood/LoadData";
import UpdateFood from "./Pages/Admin/DeleteFood/UpdateFood";
import Security from "./Pages/Admin/Security";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin073591048241998" element={<FirstPage />} />
        <Route path="/addFood073591048241998" element={<AddFood />} />
        <Route path="/deleteFood073591048241998" element={<LoadData />} />
        <Route path="/updateFood073591048241998" element={<UpdateFood />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
