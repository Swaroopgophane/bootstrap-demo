import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from "./pages/Errorpage";


function App() {
  return (
    <>
      <BrowserRouter basename="/bootstrap-demo">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
