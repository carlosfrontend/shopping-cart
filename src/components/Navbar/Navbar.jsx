import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import PropTypes, { any, objectOf } from "prop-types";
import { Menu, X } from "lucide-react";
import CartCounter from "../CartCounter/CartCounter";
import { useEffect, useState } from "react";

const Navbar = ({ imageUrl, title, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (e.target.getAttribute("id") !== "dropdownMenu") {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
      }
    };
    document.documentElement.addEventListener("click", handleOutSideClick);

    return () => {
      document.documentElement.removeEventListener("click", handleOutSideClick);
    };
  }, [isMenuOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {" "}
      <nav className={styles.navbar}>
        <Link to={"/"} className={styles.brandContainer}>
          <img
            className={styles.brandLogo}
            src={imageUrl}
            alt={title + " " + "logo"}
          />
          <h1 className={styles.brandTitle}>{title}</h1>
        </Link>
        <ul id="menu" className={styles.menu}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={styles.linkContainer}>
              {link.icon}
              {link.name}
              {link.id === 2 && <CartCounter />}
            </NavLink>
          </li>
        ))}
      </ul>

        <button title={isMenuOpen ? 'close main menu' :'open main menu'} onClick={handleClick} className={styles.toggleButton}>
          <span>
            {isMenuOpen ? (
              <X
                className={
                  isMenuOpen && styles.closeMenu
                }
              />
            ) : (
              <Menu />
            )}
          </span>
        </button>
      </nav>
      <ul id="dropdownMenu" className={isMenuOpen ? styles.open : styles.close}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={styles.linkContainer}>
              {link.icon}
              {link.name}
              {link.id === 2 && <CartCounter />}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

Navbar.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.arrayOf(objectOf(any)),
};

export default Navbar;
