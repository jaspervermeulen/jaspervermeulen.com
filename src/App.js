import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Styles/main.scss';

import Intro from './Components/Intro';
import Projects from './Components/Projects';
import ProjectDetail from './Components/ProductDetail';

const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className={`App ${theme}`}>
      <Helmet>
        <title>Jasper Vermeulen</title>
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="bg">
              <div className="alignment">
                <div className="wrapper">
                  <Intro />
                  <main>
                    <Projects />
                  </main>
                  <div className="copy__wrapper">
                    <p className="copy">c. 2021 Jasper Vermeulen</p>
                    <div>
                      <button
                        onClick={() => toggleTheme()}
                        className="copy copy-btn"
                      >
                        Modes
                      </button>
                      <a
                        href="https://app.contentful.com"
                        target="_blank"
                        rel="noreferrer"
                        className="copy copy-lnk"
                      >
                        Admin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route
            path="/project/:id"
            exact
            render={(props) => <ProjectDetail {...props} />}
          />
          <Route>
            <NoMatchRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
