import Header from "./Header.js";
import Footer from "./Footer.js";

import Home from "./Home.js";
import Clube from "./pages/Clube.js";
import Multimedia from "./pages/Multimedia.js";
import Graduacao from "./pages/Graduacao.js";
import Atletas from "./pages/Atletas.js";
import Contactos from "./pages/Contactos.js";


import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clube" element={<Clube />} />
          <Route path="/Multimedia" element={<Multimedia />} />
          <Route path="/Graduacao" element={<Graduacao />} />
          <Route path="/Atletas" element={<Atletas />} />
          <Route path="/Contactos" element={<Contactos />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
