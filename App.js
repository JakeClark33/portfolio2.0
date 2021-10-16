import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './components/About';
import AllProjects from './components/Gallery';
import ContactMe from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Vanilla JavaScript',
      description: 'These projects have been created using plain JavaScript.',
    },
    {
      name: 'Javascript and CSS',
      description: 'These projects have been created with JavaScript and styled with CSS.',
    },
    {
      name: 'APIs',
      description: 'These projects have made use of APIs to provide larger databases of information for the user.',
    },
    {
      name: 'Backend Server',
      description: 'These projects feature backend server applications such as MySQL, MongoDB and NoSQL.',
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
            <AllProjects currentCategory={currentCategory}></AllProjects>
            <AboutMe></AboutMe>
          </>
        ) : (
          <ContactMe></ContactMe>
        )}
      </main>
    </div>
  );
}

export default App;
