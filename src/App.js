import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
// import Gallery from "./componets/Gallery";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description: "All my work",
    },
    { name: "Photos", description: "Some Pictures I have taken" },
    { name: "Resume", description: "What I Have Done" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  // function Foot() {}



  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Gallery currentCategory={currentCategory}></Gallery> */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        ) : }
        
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;