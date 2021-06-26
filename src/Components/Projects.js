import React, { useEffect, useState } from 'react';

import Project from './Project';
import Footer from './Footer';

const query = `
{
  projectCollection{
    items{
      id
      title
      description{
        json
      }
      tags
      role
      info
      coverHigh{
        title
        url
      }
      coverLow{
        title
        url
      }
       imagesCollection{
        items {
          title
          url
        }
      }

    }
  }
}
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_AUTHORIZATION}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          setError(errors);
        }
        setProjects(data.projectCollection.items);
      });
  }, []);

  return (
    <>
      {error === true ? (
        <></>
      ) : (
        <>
          <div className="thematic-break"></div>
          <h2 className="projects__title">Selected Projects</h2>
          <div className="projects">
            {projects.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </div>
          <div className="thematic-break"></div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Projects;
