import React from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';

function ProjectList(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <Projects category={currentCategory.name} />
    </section>
  );
}
export default ProjectList;
