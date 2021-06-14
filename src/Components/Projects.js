import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:1337/projects')
    .then((res) => {
      setProjects(res.data);
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    <div className="projects">
      <h2 className="projects__title">Selected Projects</h2>
      {
        projects.map((project) => {
          return (
            <Project key={project.id} project={project} />
          )
        })
      }
    </div>
  )
}

export default Projects;