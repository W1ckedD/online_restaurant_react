import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_HIDE,
  SIDEBAR_SHOW,
} from '../types/sidebarTypes';

export const showSidebar = () => dispatch => {
  dispatch({ type: SIDEBAR_SHOW });
}

export const hideSidebar = () => dispatch => {
  dispatch({ type: SIDEBAR_HIDE });
}

export const openSidebar = () => dispatch => {
  dispatch({ type: SIDEBAR_OPEN });
}

export const closeSidebar = () => dispatch => {
  dispatch({ type: SIDEBAR_CLOSE });
}