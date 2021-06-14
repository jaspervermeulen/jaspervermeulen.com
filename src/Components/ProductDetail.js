import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Copy from './Copy';

const ProductDetail = (props) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:1337/projects/' + props.match.params.id)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="alignment">
      <div className="wrapper">
        <div className="detail">
          {Object.keys(project).length === 0 ? (
            <div>
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          ) : (
            <div className="detail__wrapper">
              <Link className="detail__back" to="/">&larr;</Link>
              <div className="detail__top">
                <img
                  className="detail__top--img"
                  src={`http://localhost:1337` + project.image['url']}
                  alt={project.title}
                />
                <p className="detail__top--title">{project.title}</p>
                <p className="detail__top--subtitle">{project.description}</p>
                <div className="detail__top--extras">
                  <div className="detail__top--extras-role">
                    <p className="detail__top--extras-role-label">My Role</p>
                    <p className="detail__top--extras-role-put">{project.role}</p>
                  </div>
                  <div className="detail__top--extras-www">
                    <p className="detail__top--extras-www-label">Website</p>
                    <p className="detail__top--extras-www-put"><a className="detail__top--extras-www-put-link" target="_blank" rel="noreferrer" href={project.url}>{project.url}</a></p>
                  </div>
                </div>
              </div>
              <div className="thematic-break"></div>
              <div className="detail__info">
                {project.info.map((item) => {
                  return (
                    <div className="detail__intro--item" key={item.id}>
                      <p className="detail__intro--item--title">{item.title}</p>
                      <p className="detail__intro--item--description">{item.description}</p>
                      {item.image.map((image) => {
                        return (
                          <img
                            className="detail__intro--item--image"
                            key={image.id}
                            src={`http://localhost:1337` + image.url}
                            alt={project.title}
                          ></img>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="thematic-break"></div>
              <Footer />
              <Copy />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
