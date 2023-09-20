import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/iconAuth.svg';
import {urlAuth} from '../../../api/auth';
import {useSelector} from 'react-redux';
// import {getToken} from '../../../api/token';

export const Auth = () => {
  console.log(style);
  // const token = getToken();
  const state = useSelector((state) => {
    state.auth;
  });
  console.log(state);
  return (
    <button className={style.button}>
      <a href={urlAuth}>
        <IconAuth/>
      </a>
    </button>
  );
};
