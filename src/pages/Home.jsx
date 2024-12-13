import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Premier article",
    content: "Ceci est le contenu de mon premier article.",
    date: "13 décembre 2024",
    reactions: { like: 10, laugh: 5, angry: 1, love: 8, support: 3 }
  },
  // Autres articles...
];

const Home = () => {
  return (
    <main>
      {articles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
};

export default Home;
