import React, { useEffect, useState } from 'react';

const query = `
{
  cvCollection{
    items{
      name
      tag
      description
      experience
      education
      personalInfo
      skills
      languages
    }
  }
}
`;

const Curriculum = () => {
  const [data, setData] = useState();

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_AUTHORIZATION}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data.cvCollection.items[0]);
      });
  }, []);

  console.log(data);

  if (data !== undefined) {
    return (
      <div className="cv">
        <div className="cv-wrapper">
          <div className="cv-top">
            <div className="cv-top-text">
              <p className="cv-top__name">{data.name}</p>
              <p className="cv-top__tag">{data.tag}</p>
            </div>
            <div className="cv-top-img"></div>
          </div>
          <div className="cv-main">
            <div className="cv-main__one">
              <p className="cv-main__one--description">{data.description}</p>
              <div className="cv-main__one--experience">
                <p className="experience__title">Experience</p>
                {data.experience.map((item) => {
                  return (
                    <div className="experience__wrap" key={item.title}>
                      <p className="experience__date">{item.date}</p>
                      <div className="experience__info">
                        <p className="experience__head">{item.title}</p>
                        <p className="experience__location">{item.location}</p>
                        {item.points.map((point) => {
                          return (
                            <p className="experience__point" key={point}>
                              · {point}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cv-main__one--education">
                <p className="education__title">Education</p>
                {data.education.map((item) => {
                  return (
                    <div className="education__wrap" key={item.title}>
                      <p className="education__date">{item.date}</p>
                      <div className="education__info">
                        <p className="education__head">{item.title}</p>
                        <p className="education__type">{item.type}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cv-main__two">
              <div className="personal-info">
                <p className="personal-info__title">Personal Info</p>
                {data.personalInfo.map((item) => {
                  return (
                    <div className="personal-info__wrap" key={item.type}>
                      <p className="personal-info__type">{item.type}</p>
                      {item.content ? (
                        <p className="personal-info__content">{item.content}</p>
                      ) : (
                        <></>
                      )}
                      {item.line1 ? (
                        <p className="personal-info__line">{item.line1}</p>
                      ) : (
                        <></>
                      )}
                      {item.line2 ? (
                        <p className="personal-info__line">{item.line2}</p>
                      ) : (
                        <></>
                      )}
                      {item.line3 ? (
                        <p className="personal-info__line">{item.line3}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="skills">
                <p className="skills__title">Skills</p>
                {data.skills.map((item) => {
                  return (
                    <div className="skills__wrap" key={item.type}>
                      <p className="skills__type">{item.type}</p>
                      <div className="skills__wrapper">
                        {item.score.map((item) => {
                          return <div className="skills__wrapper--item"></div>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="language">
                <p className="language__title">Languages</p>
                {data.languages.map((item) => {
                  return (
                    <div className="language__wrap" key={item.type}>
                      <p className="language__type">{item.type}</p>
                      <div className="language__wrapper">
                        {item.score.map((item) => {
                          return (
                            <div className="language__wrapper--item"></div>
                          );
                        })}
                      </div>
                      <p className="language__additional">{item.additional}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Empty</p>;
  }
};

export default Curriculum;
