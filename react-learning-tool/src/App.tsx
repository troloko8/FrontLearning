import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Lessons from './pages/Lessons/Lessons';
import Profile from './pages/Profile/Profile';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/lessons" component={Lessons} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;