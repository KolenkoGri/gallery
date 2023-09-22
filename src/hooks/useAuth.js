import {useSelector} from 'react-redux';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);

  return [auth, loading];
};

