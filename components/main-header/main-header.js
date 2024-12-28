import Link from 'next/link';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import classes from './main.header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link
          href={'/'}
          className={classes.logo}>
          <Image
            priority
            src={Logo}
            alt="logo"
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
