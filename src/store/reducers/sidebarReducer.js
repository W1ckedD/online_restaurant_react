import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_HIDE,
  SIDEBAR_SHOW,
} from '../types/sidebarTypes';

const initialState = { showSidebar: true, sidebarOpen: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_SHOW:
      return { ...state, showSidebar: true };
    case SIDEBAR_HIDE:
      return { ...state, showSidebar: false };
    case SIDEBAR_OPEN:
      return { ...state, sidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, sidebarOpen: false };
    default:
      return state;
  }
};
