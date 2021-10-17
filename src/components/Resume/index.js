import React, {Component } from 'react';
import jsResume from 'src\assets\large\resume\Resume.pdf';

class Resume extends Component {
  render() {
    return(
      <div>
        <h1> Resume Page </h1>
        <a href="src/assets/large/resume/" download>Resume</a>
      </div>
    )
  }
}


    export default Resume;