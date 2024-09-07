import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import IndiaFlagDeco from "./components/IndiaFlagDeco";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />

      </Routes>
      <IndiaFlagDeco />
      <Footer />
    </>
  );
}

export default App;
