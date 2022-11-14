import { useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';
import Project from '../components/Project';

const Projects = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f7f6f0"
  });
  return (
    <div>
      <Navbar />
      <div style={{marginLeft: "100px"}}>
        <h1>Projects</h1> 
        <br/>
        <Project title="TorqueScout" link="https://github.com/TexasTorque/TorqueScout3" stack={["React", "Firebase"]} desc="A scouting app to collect metrics on other FRC robotics teams during competition, ranks teams based on their
strengths and weaknesses, and identifies potential alliances."/>
        <Project title="SmartMarket" link="https://github.com/Suhas44/SmartMarket" stack={["React", "Express", "MongoDB"]} desc="An application to make paper trading simple and efficient. Users can invest and trade across multiple
portfolios, see profits and losses, and pick their own trading plan."/>
        <Project title="PyMNIST" link="" stack={["Python", "TensorFlow"]} desc="A convolutional neural network to classify characters from an MNIST dataset using TensorFlow. This
network was trained on thousands of images to identify characters."/>
        <Project title="CJSON" link="https://github.com/Suhas44/CJSON" stack={["C", "C++"]} desc="A JSON parser written in C and C++."/>
        <Project title="Argo Deployment and Migration Workflows " link="" stack={["Python", "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Firebase", "Argo"]} desc="Leveraged Argo Workflows to automate the deployment of multiple 
        company projects and monitoring database migrations between PostgreSQL and Firebase."/>
        <Project title="Axo" link="https://www.axofoods.com/" stack={["Java", "Spring", "Firebase", "React"]} desc="Led the development of a startup's web application to manage organic crop production and handle transactions between farmers and buyers."/>
      </div>
    </div>
  );
};

export default Projects;