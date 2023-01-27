import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Errorpage from "./pages/Errorpage";


function App() {
  return (
    <>
      <BrowserRouter basename="/bootstrap-demo">
      <Header />
      <Routes>
      <Route path="/bootstrap-demo" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<Errorpage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
