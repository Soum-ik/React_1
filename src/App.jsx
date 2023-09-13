import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/about";
import Customer from "./components/Customer";
import Achivment from "./components/Achivment";
import Unlock from "./components/unlock";
import Community from "./components/communit_update";
import Decription from "./components/Decription";
import Footer from "./components/footer";
import Users from "./components/use";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Achivment />
      <Unlock/>
      <Customer/>
      <Community/>
      <Users/>
      <Decription/>
      <Footer/>
    </>
  );
}

export default App;
