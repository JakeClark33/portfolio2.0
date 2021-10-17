import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'To view an example a project click on one of the display pictures.',
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
          <ProjectList currentCategory={currentCategory}></ProjectList>
          <Resume></Resume>
          </>
        ) : (
          <ContactMe></ContactMe>
        )}
      </main>
    </div>
  );
}

export default App;
