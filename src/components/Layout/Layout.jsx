import style from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({children}) => {
  console.log(style);
  return (
    <div className = {style.container}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};
