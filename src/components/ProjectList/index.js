import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Robot Gladiators',
      category: 'projects',
      description: 'Robot gladiators is a JavaScript game that lets a user battle through a slew of enemies.',
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Run Buddy allows users to view trainer information and sign up for personal training sessions.',
    },
    {
      name: 'What the Bleep Should I Watch',
      category:'projects',
      description: 'What the Bleep should I watch gives users access to an online movie database so they view available streaming platforms for the viewing selection.',
    },
    {
      name: 'TripTrakkr',
      category: 'projects',
      description: 'TripTakkr gives users the ability to choose landmarks or places of interest in Wisconsin. The mobile aspect of this app allows users to view their location on a map and the backend server functionality lets users save favorite trips and future trips.',
    },
    {
      name: 'TripTrakkr',
      category: 'resume',
      description: 'TripTakkr gives users the ability to choose landmarks or places of interest in Wisconsin. The mobile aspect of this app allows users to view their location on a map and the backend server functionality lets users save favorite trips and future trips.',
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
            src={require(`../../assets/small/${category}/${i}.jpg`)}
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

export default ProjectList;
