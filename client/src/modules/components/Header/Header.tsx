import React from "react";
import { ReactComponent as Icon } from './header-client-logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <Icon />
        <img style={{ height: "40px", width: "40px", borderRadius: "50%"}} src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_960_720.png" />
      </header>
    );
}

export default Header;
