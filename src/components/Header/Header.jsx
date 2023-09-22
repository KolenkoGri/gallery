import Layout from '../Layout';
import Auth from './Auth';
import style from './Header.module.css';
import Logo from './Logo';

export const Header = () => (
  <header className = {style.header}>
    <Layout>
      <div className={style.block}>
        <Logo/>
        <Auth/>
      </div>
    </Layout>
  </header>
);
