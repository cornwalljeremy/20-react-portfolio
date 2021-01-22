import React, { useState } from "react";
import Nav from "./componets/Nav";
import About from "./componets/About/";
// import Gallery from "./componets/Gallery";
import ContactForm from "./componets/Contact";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "All my work",
    },
    { name: "Photos", description: "Some Pictures I have taken" },
    { name: "Resume", description: "What I Have Done" },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

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
        )}
      </main>
    </div>
  );
}

export default App;
