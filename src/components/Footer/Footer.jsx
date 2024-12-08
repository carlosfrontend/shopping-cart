import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = () => new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Help</a>
      </div>
      <div className={styles.socialContainer}>
        <a href="#" title="Instagram">
          <Instagram className={styles.socialIcon} />
        </a>
        <a href="#" title="Facebook">
          <Facebook className={styles.socialIcon} />
        </a>
        <a href="#" title="Twitter">
          <Twitter className={styles.socialIcon} />
        </a>
      </div>
      <div className={styles.brandContainer}>
        <img className={styles.logo} src={Logo} alt="Deals Shop logo" />
        <small>{currentYear()} - Deals Shop &copy;</small>
      </div>
    </footer>
  );
};

export default Footer;
