import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - Pseudo: DevErrant</p>
      <nav>
        <a href="#about">À propos</a> | <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
