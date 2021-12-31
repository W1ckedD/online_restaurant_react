import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

// Utils
import cx from 'classnames';

// Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

// Pages
import LoginPage from './pages/LoginPage';

const App = () => {
  const { sidebarOpen } = useSelector((state) => state.sidebar);
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className={cx('context', { shifted: !sidebarOpen })}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
