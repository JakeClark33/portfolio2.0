import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'To view an example a project click on one of the display pictures.',
    },
    {
      name: 'Resume',
      description: 'To view a current working resume click the image.',
    },
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
            <AboutMe></AboutMe>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <ContactMe></ContactMe>
        )}
      </main>
    </div>
  );
}

export default App;
