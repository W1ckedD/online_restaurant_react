import './Sidebar.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaHome,
  FaScroll,
  FaCartPlus,
  FaCog,
  FaPortrait,
} from 'react-icons/fa';

import cx from 'classnames';

const items = [
  {
    id: 1,
    icon: <FaHome className="sidebar-nav-icon" />,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    icon: <FaScroll className="sidebar-nav-icon" />,
    title: 'Menus',
    url: '/menus',
  },
  {
    id: 3,
    icon: <FaCartPlus className="sidebar-nav-icon" />,
    title: 'Cart',
    url: '/cart',
  },
  {
    id: 4,
    icon: <FaPortrait className="sidebar-nav-icon" />,
    title: 'Profile',
    url: '/profile',
  },
  {
    id: 5,
    icon: <FaCog className="sidebar-nav-icon" />,
    title: 'Settings',
    url: '/settings',
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const { sidebarOpen } = useSelector((state) => state.sidebar);
  const { openSidebar, closeSidebar } = useActions();
  return (
    <div className={cx('sidebar', { 'sidebar-closed': !sidebarOpen })}>
      <ul className="sidebar-nav">
        <button
          className="btn"
          onClick={() => {
            if (sidebarOpen) {
              closeSidebar();
            } else {
              openSidebar();
            }
          }}
        >
          <FaBars className="sidebar-nav-icon" />
        </button>
        {items.map((item) => (
          <li
            key={item.id}
            className={cx('sidebar-nav-item', {
              active:
                pathname === item.url || pathname.includes(item.title.toLowerCase()),
            })}
          >
            <Link to={item.url}>{item.icon}</Link>
            <CSSTransition
              in={sidebarOpen}
              timeout={300}
              classNames="t-sidebar"
              unmountOnExit
            >
              <Link to={item.url} className="sidebar-nav-link">
                {item.title}
              </Link>
            </CSSTransition>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
