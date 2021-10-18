import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, githubURL  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src= {`https://github.com/JakeClark33/portfolio2.0/raw/main/src/assets/large/${category}/${index}.jpg`} alt="current category" />  
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close this Window!
        </button>
        <a href= {githubURL}>
        <button className="GFG">
            Visit the Repo!
        </button>
        </a>
      </div>
    </div>
  );
};

export default Modal;
