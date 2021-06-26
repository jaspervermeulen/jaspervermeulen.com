import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImageLoad from '../Helpers/progressiveImageLoad';

const Project = ({ project }) => {
  const [src, { blur }] = ProgressiveImageLoad(
    project.coverLow.url,
    project.coverHigh.url
  );

  return (
    <Link className="project-front" to={`/project/` + project.id}>
      <img
        className="project-front__img"
        src={src}
        alt={project.title}
        style={{
          filter: blur ? 'blur(20px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          clipPath: 'inset(0)',
        }}
      />
      <p className="project-front__title">{project.title}</p>
      <p className="project-front__tags">{project.tags}</p>
    </Link>
  );
};

export default Project;
