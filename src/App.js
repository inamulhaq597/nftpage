import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Contactsub from "./Contactsub";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutsub from "./Aboutsub";
import Blogsub from "./Blogsub";
import Faqpage from "./Faqpage";
import Error404page from "./Error404page";
import Singleblog from "./Singleblog";
import Nftsub from "./Nftsub";
import Nftdetailsub from "./Nftdetailsub";
import Sidemenudiv from "./Sidemenudiv";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [sidebar,setSidebar] = useState(false)
  return (
    <>
     {sidebar === true ?<Sidemenudiv setSidebar = {setSidebar} ></Sidemenudiv> : null }
      <Navbar setSidebar = {setSidebar}></Navbar>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactsub" element={<Contactsub />}></Route>
        <Route path="/aboutsub" element={<Aboutsub />}></Route>
        <Route path="/blogsub" element={<Blogsub />}></Route>
        <Route path="/faqpage" element={<Faqpage />}></Route>
        <Route path="/error404page" element={<Error404page />}></Route>
        <Route path="/singleblog" element={<Singleblog />}></Route>
        <Route path="/nftsub" element={<Nftsub />}></Route>
        <Route path="/nftdetailsub" element={<Nftdetailsub/>}></Route>
         
      </Routes>
      <Footer></Footer>

      

      
      
    </>
  );
}

export default App;
