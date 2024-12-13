import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <h1>Les chroniques du dev vagabond</h1>
        <input type="text" placeholder="Rechercher un article..." />
      </div>
    </header>
  );
};

export default Header;
