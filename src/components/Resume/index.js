import React, {Component } from 'react';
// import jsResume from 'src\assets\large\resume\Resume.pdf';

class Resume extends Component {
  render() {
    return(
      <div id="resume">
          <h1>Click resume to download most current resume</h1>
        <a href="https://github.com/JakeClark33/portfolio2.0/raw/main/src/assets/large/resume/jsResume.pdf" download>Resume</a>
      </div>
    )
  }
}


    export default Resume;