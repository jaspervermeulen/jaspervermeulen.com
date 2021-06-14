import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/main.scss';

import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Copy from "./Components/Copy";
import ProjectDetail from "./Components/ProductDetail";

const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="alignment">
            <div className="wrapper">
              <Intro />
              <div className="thematic-break"></div>
              <main>
                <Projects />
              </main>
              <div className="thematic-break"></div>
              <Footer />
              <Copy />
            </div>
          </div>
        </Route>
        <Route path="/project/:id" exact render={(props) => <ProjectDetail {...props} />} />
        <Route>
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
