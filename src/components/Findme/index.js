import React from 'react';

const GitHub = "https://Jakemclark33@github.com";
const LinkedIn = "https://www.linkedin.com/in/jakemclark";
const Twitter = "http://twitter.com/@JacobCl49609802"
function FindMe(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag" id="findme"></h1>
      <p><a href = {GitHub}>GitHub Repo</a>
         <a href = {LinkedIn}>LinkedIn</a>
         <a href = {Twitter}>Twitter</a>
    </p>
      
    </section>
  );
}
export default FindMe;
