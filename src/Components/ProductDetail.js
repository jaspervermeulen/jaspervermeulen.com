import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const query = `
{
  projectCollection{
    items{
      url
      externUrl
      externUrlGithub
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

const ProductDetail = (props) => {
  const [project, setProject] = useState({});

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
          console.log(errors);
        }
        data.projectCollection.items.forEach((item) => {
          if (item.id === parseInt(props.match.params.id)) {
            setProject(item);
          }
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="alignment">
      <div className="wrapper">
        <div className="detail">
          {Object.keys(project).length === 0 ? (
            <div className="spinner__wrapper">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          ) : (
            <div className="detail__wrapper">
              <Link className="detail__back" to="/">
                &larr;
              </Link>
              <div className="detail__top">
                <img
                  className="detail__top--img"
                  src={project.coverHigh.url}
                  alt={project.title}
                />
                <p className="detail__top--title">{project.title}</p>
                <p className="detail__top--subtitle">
                  {project.description.json.content[0].content[0].value}
                </p>

                {project.externUrl ? (
                  <a
                    className="detail__top--extern detail__top--extern-m"
                    target="_blank"
                    rel="noreferrer"
                    href={project.externUrl}
                  >
                    Behance
                  </a>
                ) : (
                  <></>
                  )}
                  {project.externUrlGithub ? (
                  <a
                    className="detail__top--extern"
                    target="_blank"
                    rel="noreferrer"
                    href={project.externUrlGithub}
                  >
                    Github
                  </a>
                ) : (
                  <></>
                )}

                <div className="detail__top--extras">
                  <div className="detail__top--extras-role">
                    <p className="detail__top--extras-role-label">My Role</p>
                    <p className="detail__top--extras-role-put">
                      {project.role}
                    </p>
                  </div>
                  {project.url ? (
                    <div className="detail__top--extras-www">
                      <p className="detail__top--extras-www-label">Website</p>
                      <p className="detail__top--extras-www-put">
                        <a
                          className="detail__top--extras-www-put-link"
                          target="_blank"
                          rel="noreferrer"
                          href={project.url}
                        >
                          {project.url}
                        </a>
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="thematic-break"></div>
              <div className="detail__info">
                {project.info.info.map((item) => {
                  return (
                    <div className="detail__intro--item" key={item.title}>
                      <p className="detail__intro--item--title">{item.title}</p>
                      <p className="detail__intro--item--description">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="detail__images">
                {project.imagesCollection.items.map((image) => {
                  return (
                    <img
                      className="detail__images--item"
                      key={image.url}
                      src={image.url}
                      alt={image.title}
                    />
                  );
                })}
              </div>
              <div className="thematic-break"></div>
              <Footer />
              <div className="copy__wrapper">
                <p className="copy">c. 2021 Jasper Vermeulen</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
