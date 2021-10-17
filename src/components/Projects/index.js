import React, {  useState } from 'react';
import Modal from '../Modal';


const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
 const [photos] = useState([
    {
      name:'Robot Gladiators',
      category: 'projects',
      description:'Robot gladiators is a JavaScript game that lets a user battle through a slew of enemies. Visit my repo @',
      githubURL: "https://github.com/JakeClark33/robot-gladiators.git"
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Run Buddy allows users to view trainer information and sign up for personal training sessions.',
      githubURL: "https://github.com/JakeClark33/run-buddy.git"
    },
    {
      name: 'What the Bleep Should I Watch',
      category:'projects',
      description: 'What the Bleep should I watch gives users access to an online movie database so they view available streaming platforms for the viewing selection.',
      githubURL: "https://github.com/watkincw/what-the-bleep-should-I-watch.git"
    },
    {
      name: 'TripTrakkr',
      category: 'projects',
      description: 'TripTakkr gives users the ability to choose landmarks or places of interest in Wisconsin. The mobile aspect of this app allows users to view their location on a map and the backend server functionality lets users save favorite trips and future trips.',
      githubURL: "https://github.com/JakeClark33/TripTrakkr.git"
    },
    {
      name: 'Dollars and Sense',
      category: 'projects',
      description: 'Dollars and sense gives users the ability to track their budget using a cient side server that will keep track of information if the user is offline or online and input that information once the user is connected again.',
      githubURL: "https://github.com/JakeClark33/dollars-and-sense.git"
    },
    {
      name: 'Quiz This',
      category: 'projects',
      description: 'This quiz application gives users the ability to take an online quiz and post their high score to compete with others.',
      githubURL: "https://github.com/JakeClark33/Quiz-This.git"
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
            <img
            src= {`https://github.com/JakeClark33/portfolio2.0/raw/main/src/assets/small/${category}/${i}.jpg`}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
