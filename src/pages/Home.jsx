import { useState } from 'react';
import Article from '../components/Article';
import coverImage from '../assets/cover.png'; // Assure-toi que l'image est dans le dossier "assets"

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

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [memos, setMemos] = useState([]); // État pour les mémos de code
  const [newMemo, setNewMemo] = useState("");
  const [audioClips, setAudioClips] = useState([]); // État pour les clips audio

  const handlePublish = () => {
    if (newTitle.trim() === "" || newContent.trim() === "") return;

    const newPost = {
      id: articles.length + 1,
      title: newTitle,
      content: newContent,
      date: new Date().toLocaleString(),
      reactions: { like: 0, laugh: 0, angry: 0, love: 0, support: 0 },
    };

    setArticles([newPost, ...articles]);
    setNewTitle("");
    setNewContent("");
  };

  const handleAddMemo = () => {
    if (newMemo.trim() === "") return;
    setMemos([newMemo, ...memos]);
    setNewMemo("");
  };

  const handleAddAudio = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioClips([...audioClips, URL.createObjectURL(file)]);
    }
  };

  return (
    <div className="home-layout">
      {/* Colonne gauche */}
      <div className="left-column">
        <h3>Mémos de code</h3>
        <textarea
          placeholder="Écrivez un mémo..."
          value={newMemo}
          onChange={(e) => setNewMemo(e.target.value)}
        ></textarea>
        <button onClick={handleAddMemo}>Ajouter</button>
        <ul>
          {memos.map((memo, index) => (
            <li key={index}>{memo}</li>
          ))}
        </ul>
      </div>

      {/* Contenu principal */}
      <div className="main-content">
        {/* Zone de saisie pour un nouvel article */}
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
      </div>

      {/* Colonne droite */}
      <div className="right-column">
        <img src={coverImage} alt="Cover" />
        <h3>Clips audio</h3>
        <input type="file" accept="audio/*" onChange={handleAddAudio} />
        <ul>
          {audioClips.map((clip, index) => (
            <li key={index}>
              <audio controls>
                <source src={clip} type="audio/mpeg" />
                Votre navigateur ne supporte pas l’audio.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
