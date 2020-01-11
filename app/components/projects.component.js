import React from 'react';
import {Link} from 'react-router-dom';
import './projects.component.less';
import Reorder from 'react-reorder';

const ProjectsComponent = ({deleteProject, orderedItems, projects, onReorder}) => {

  return (
    <main className="projects">
     <header className="projects-header">
       <h3>Projects.</h3>
       <Link to="/dashboard/projects/add" className="btn btn-success">Add project</Link>
     </header>
     <section className="projects-cards">
       <Reorder
        className="drag-item"
        reorderId="my-list" // Unique ID that is used internally to track this list (required)
        placeholderClassName="drag-placeholder" // Class name to be applied to placeholder elements (optional), defaults to 'placeholder'
        draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
        lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
        holdTime={500} // Default hold time before dragging begins (mouse & touch) (optional), defaults to 0
        touchHoldTime={500} // Hold time before dragging begins on touch devices (optional), defaults to holdTime
        mouseHoldTime={200} // Hold time before dragging begins with mouse (optional), defaults to holdTime
        onReorder={onReorder.bind(this)} // Callback when an item is dropped (you will need this to update your state)
        autoScroll={true} // Enable auto-scrolling when the pointer is close to the edge of the Reorder component (optional), defaults to true
        disabled={false} // Disable reordering (optional), defaults to false
        disableContextMenus={true} // Disable context menus when holding on touch devices (optional), defaults to true
        placeholder={
          <div className="custom-placeholder" /> // Custom placeholder element (optional), defaults to clone of dragged element
        }
      >
       {
         orderedItems.map((project, key) => {

           return (
             <div key={project.name} className="project">
              <div className="project-description">
             <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div className="project-buttons">
                <Link to={`/dashboard/projects/edit/${project.uid}`} className="btn btn-primary btn-sm">Edit</Link>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProject(project.uid)}>Delete</button>
              </div>
              </div>
              <Link draggable={false} to={`/dashboard/projects/view/${project.uid}`} className="project-image">
               <img draggable={false} src={project.imageUrl} alt={project.name + "'s collection of images.'"}/>
              </Link>
             </div>
           )
         })
       }
     </Reorder>
     </section>
    </main>
  )
}

export default ProjectsComponent;
