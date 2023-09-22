import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/iconAuth.svg';
import {urlAuth} from '../../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import {useEffect} from 'react';
import {authRequestAsync} from '../../store/auth/authAsync';

export const Auth = () => {
  const auth = useAuth();
  console.log(auth);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const state = useSelector((state) => state.auth);
  console.log(state);
  return (
    <button className={style.button}>
      <a href={urlAuth}>
        <IconAuth/>
      </a>
    </button>
  );
};
