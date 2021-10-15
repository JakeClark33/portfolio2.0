import React, { useState } from 'react';
import Modal from '../../../components/Modal';

const ProjectList = ({ category  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Robots',
      category: 'Projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Runbuddy',
      category: 'Projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'TripTrakkr',
      category: 'Projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'WTBSIW',
      category: 'Projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    // {
    //   name: 'Cafe interior',
    //   category: 'commercial',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Cat green eyes',
    //   category: 'portraits',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Green parrot',
    //   category: 'portraits',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Yellow macaw',
    //   category: 'portraits',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Pug smile',
    //   category: 'portraits',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Pancakes',
    //   category: 'food',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Burrito',
    //   category: 'food',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Scallop pasta',
    //   category: 'food',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Burger',
    //   category: 'food',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Fruit bowl',
    //   category: 'food',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Green river',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Docks',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Panoramic village by sea',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Domestic landscape',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Park bench',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const toggleModal = (image, i) => {
    // current photo
      setCurrentPhoto({...image, index: i})
      setIsModalOpen(true);
    
    
  }
  return (
    <div>
     {isModalOpen && 
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
}
      <div className="flex-row">
        {currentPhotos.map((image, i) => 
        (
           <div> {console.log(image, i)};
          <img
          src={require(`../../../assets/small/${category}/${i}.jpg`).default}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;