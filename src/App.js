import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import PhotoPage from './pages/PhotoPage'


const App = () => {
  return (
    <Router>
        {/*<Header />*/}

        <Route exact path="/" component={Home} />
        <Route path="/photo/:id" component={PhotoPage} />
    </Router>
  );
}

export default App;
