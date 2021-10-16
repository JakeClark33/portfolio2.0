import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function AboutMe() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am currently in a Coding bootcamp for Javascript full stack development.
          I have experience with Vanilla Javascript, CSS, API's, front and back-end 
          servers including MYSQL, NOSQL and MongoDB. I have a bachelor of arts in 
          Psychology. I am expanding my knowledge base to apply for other jobs as well
          as supplementing my wifes business and web development. 
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
