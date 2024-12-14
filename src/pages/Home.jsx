import { useState } from 'react';
import Article from '../components/Article';

const Home = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Premier article",
      content: "Ceci est le contenu de mon premier article.",
      date: "13 décembre 2024",
      reactions: { like: 10, laugh: 5, angry: 1, love: 8, support: 3 },
    },
  ]);

  const [newTitle, setNewTitle] = useState(""); // État pour le titre du nouvel article
  const [newContent, setNewContent] = useState(""); // État pour le contenu du nouvel article

  const handlePublish = () => {
    if (newTitle.trim() === "" || newContent.trim() === "") return; // Empêche la publication si l'un des champs est vide

    const newPost = {
      id: articles.length + 1,
      title: newTitle,
      content: newContent,
      date: new Date().toLocaleString(), // Ajoute la date et l'heure actuelles
      reactions: { like: 0, laugh: 0, angry: 0, love: 0, support: 0 },
    };

    setArticles([newPost, ...articles]); // Ajoute le nouvel article au début de la liste
    setNewTitle(""); // Réinitialise le champ du titre
    setNewContent(""); // Réinitialise la zone de texte
  };

  return (
    <main>
      {/* Zone de texte pour écrire un nouvel article */}
      <div className="new-article">
        <input
          type="text"
          placeholder="Saisissez un titre pour votre article..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Écrivez votre article ici..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
        <button onClick={handlePublish}>Publier</button>
      </div>

      {/* Liste des articles */}
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
};

export default Home;
