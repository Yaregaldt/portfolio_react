
import React from 'react';
import project1 from '../assets/images/planner.png'
import project2 from '../assets/images/note-taker.png'
import project3 from '../assets/images/team-profile-generator.png'

// import Project from './project'


function Projects() {
  return (
    <section class="sub-section-alternative" id="projects">
      <h2>Projects</h2>
      <br></br>
        <div class="project-container">
          <article class="project-card">
              <a href="https://yaregaldt.github.io/Daily_Planner/" target="_blank" rel="noreferrer">
              <img class="project-image" src={project1} alt="day planner app"/></a>
              <h3>Day Planner</h3>
              <p class="subtext">Help keep your tasks on track with this workday planner made with HTML, CSS, JavaScript, and Moment.js.</p>
              <hr/>
              <p class="subtext"><a class="project-link" href="https://github.com/Yaregaldt/Daily_Planner" target="_blank" rel="noreferrer">Github</a></p>
              <br></br>
              <p class="subtext"><a class="project-link" href="https://yaregaldt.github.io/Daily_Planner/" target="_blank" rel="noreferrer">Deployed App</a></p>
          </article>
          <article class="project-card">
            <a href="https://github.com/Yaregaldt/Note-Taker/" target="_blank" rel="noreferrer">
            <img class="project-image" src={project2} alt="Note-Taker"/></a>
            <h3>Note Taker</h3>
            <p class="subtext">This app can be used to write and save notes. This app uses Express.js back-end and will save and retrieve note data from a JSON file.</p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Yaregaldt/Note-Taker/" target="_blank" rel="noreferrer">Github</a></p>
                       
          </article>
          <article class="project-card">
            <a href="https://github.com/Yaregaldt/team-Profile-generator/" target="_blank" rel="noreferrer">
            <img class="project-image" src={project3} alt="team profile generator"/></a>
            <h3>Tech Blog Site</h3>
            <p class="subtext">A command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Yaregaldt/team-Profile-generator" target="_blank" rel="noreferrer">Github</a></p>
            
          </article>
          
      </div>
    </section>

  );
}


export default Projects;