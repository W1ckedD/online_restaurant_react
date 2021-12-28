import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

// Utils
import cx from 'classnames';

// Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const { sidebarOpen } = useSelector(state => state.sidebar);
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className={cx("context", { 'shifted': !sidebarOpen })}>
            <h1>React App</h1>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
