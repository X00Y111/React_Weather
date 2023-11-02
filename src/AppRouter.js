import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMePage from './pages/AboutMePage';
import MyTownPage from './pages/MyTownPage';
import './AppRouter.css';

const AppRouter = () => {
  return (
    <Router>
      <div className="Router-container">
        <nav>
          <Link to="/about-me">About me</Link>
          <Link to="/my-town">My Town</Link>
        </nav>
        <Switch>
          <Route path="/about-me" component={AboutMePage} />
          <Route path="/my-town" component={MyTownPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
