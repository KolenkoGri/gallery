import style from './Logo.module.css';
import {ReactComponent as IconLogo} from './img/logoImg.svg';

export const Logo = () => {
  console.log(style);
  return (
    <IconLogo/>
  );
};