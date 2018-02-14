import StepBystep from "./pages/getting-started/StepBystep";
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import glamorous from "glamorous";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/getting-started/Home";
import Install from "./pages/getting-started/Install";

import Models from "./pages/usage/Models";
import ContextGraph from "./pages/usage/ContextGraph";
import Meta from "./pages/usage/Meta";
import Options from "./pages/usage/Options";
import CustomErrors from "./pages/usage/CustomErrors";
import Filtering from "./pages/usage/Filtering";
import IncludingRelationships from "./pages/usage/IncludingRelationships";
import Pagination from "./pages/usage/Pagination";
import Routing from "./pages/usage/Routing";
import Sorting from "./pages/usage/Sorting";
import SparseFieldsets from "./pages/usage/SparseFieldsets";

const { ul } = glamorous;

const List = ul({
  marginBottom: "2em"
});

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Sidebar className="item">
            <nav>
              <h3>Getting Started</h3>
              <List>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/install">Install</Link>
                </li>
                <li>
                  <Link to="/step-by-step">Step-By-Step</Link>
                </li>
              </List>
              <h3>Usage</h3>
              <List>
                <li>
                  <Link to="/models">Models</Link>
                </li>
                <li>
                  <Link to="/context-graph">Defining Resources</Link>
                </li>
                <li>
                  <Link to="/meta-information">Meta Information</Link>
                </li>
                <li>
                  <Link to="/global-options">Global Options</Link>
                </li>
                <li>
                  <Link to="/custom-errors">Custom Errors</Link>
                </li>
                <li>
                  <Link to="/filtering">Filtering</Link>
                </li>
                <li>
                  <Link to="/including-relationships">
                    Including Relationships
                  </Link>
                </li>
                <li>
                  <Link to="/pagination">Pagination</Link>
                </li>
                <li>
                  <Link to="/routing">Routing</Link>
                </li>
                <li>
                  <Link to="/sorting">Sorting</Link>
                </li>
                <li>
                  <Link to="/sparse-fieldsets">Sparse Field Sets</Link>
                </li>
              </List>
            </nav>
          </Sidebar>
          <div className="item main">
            <Route exact path="/" component={Home} />
            <Route exact path="/install" component={Install} />
            <Route exact path="/step-by-step" component={StepBystep} />
            <Route exact path="/models" component={Models} />
            <Route exact path="/context-graph" component={ContextGraph} />
            <Route exact path="/meta-information" component={Meta} />
            <Route exact path="/global-options" component={Options} />
            <Route exact path="/custom-errors" component={CustomErrors} />
            <Route exact path="/filtering" component={Filtering} />
            <Route
              exact
              path="/including-relationships"
              component={IncludingRelationships}
            />
            <Route exact path="/pagination" component={Pagination} />
            <Route exact path="/routing" component={Routing} />
            <Route exact path="/sorting" component={Sorting} />
            <Route exact path="/sparse-fieldsets" component={SparseFieldsets} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
