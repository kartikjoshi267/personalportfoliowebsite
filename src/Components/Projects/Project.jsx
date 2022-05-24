import React from 'react'
import { FaCircle, FaExternalLinkAlt } from 'react-icons/fa'
import "./Project.css"

function Project() {
  return (
    <div id='projects'>
      <small>Projects I have completed</small>
      <br />
      <big><big>Projects</big></big>

      <br />
      <br />
      <br />

      <div className="project-area">
        <div className="side-bar-items">
          <FaCircle />
          <div className="side-bar">
          </div>
        </div>
        <div className="projects-list">
          <div className='project'>
            <div className="project-title">Let'sNote</div>
            <div className="project-details">
              This is my first M E R N project which is a note-taking application in which: <br />

              <ul>
                <li>
                  you can create new users,
                </li>
                <li>
                  log in to your account,
                </li>
                <li>
                  retrieve all your notes
                </li>
                <li>
                  add a new note
                </li>
                <li>
                  update an existing note
                </li>
                <li>
                  delete a note
                </li>
              </ul>
              The frontend development has been done by using javascript libraries such as react, react-bootstrap, react-icons, and bootstrap.
              <br />
              The backend development has been done using NodeJS - Express package. Also, the npm packages like bcryptjs and jsonwebtoken are used.
            </div>
            <div className="project-link">
              <a href="https://github.com/kartikjoshi267/letsnote" rel="noreferrer" target="_blank">
                <FaExternalLinkAlt /> Source Code (View on GitHub)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project