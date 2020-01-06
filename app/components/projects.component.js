import React from 'react';
import {Link} from 'react-router-dom';
import './projects.component.less';

const ProjectsComponent = ({grid, deleteProject}) => {

  return (
    <main className="projects">
     <header className="projects-header">
       <h3>Projects.</h3>
       <Link to="/dashboard/projects/add" className="btn btn-success">Add project</Link>
     </header>
     <section className="projects-cards">
      {
        grid.map((column, key) => {

          return (
            <div key={key} className="column">
              {
                column.map((project, key) => {

                  return (
                    <div key={key} className="project">
                     <Link to={`/dashboard/projects/view/${project.uid}`}>
                      <img src={window.origin + '/' + project.imageUrl} alt={project.name + "'s collection of images.'"}/>
                     </Link>
                     <p>{project.description}</p>
                     <div className="project-buttons">
                       <Link to={`/dashboard/projects/edit/${project.uid}`} className="btn btn-primary btn-sm">Edit</Link>
                       <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProject(project.uid)}>Delete</button>
                     </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
     </section>
    </main>
  )
}

export default ProjectsComponent;
