import facebook from "../image/facebook.png";
import instagram from "../image/instagram.png";
import x from "../image/x.png";
import youtube from "../image/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">Política de privacidad</a>
        <a href="#">Términos</a>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
