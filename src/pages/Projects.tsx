import React, { useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f7f6f0"
  });
  return (
    <div>
      <Navbar />
      <div>
      <h1>Projects</h1> 
      </div>

    </div>
  );
};

export default Projects;