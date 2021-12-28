import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sidebarActions from '../store/actions/sidebarActions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...sidebarActions }, dispatch);
}