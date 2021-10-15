import React from 'react';
// import robots from '../../assets/large/robots.jpg';
// import Runbuddy from '../../assets/large/Runbuddy.png';
// import TripTrakkr from '../../assets/large/TripTrakkr.PNG';
// import wtbsiw from '../../assets/large/wtbsiw.jpg';




function Modal({ onClose, currentPhoto})  {
    const {name, category, description, index} = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
          <p>{description}</p>
          <button onClick={onClose} type="button">Close this modal</button>
  </div>
</div>
    );
  }
  
  export default Modal;