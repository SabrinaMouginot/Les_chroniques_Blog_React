import '../css/article.css';

const Article = ({ title, content, date, reactions }) => {
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="article-info">
        <span>Publié le {date}</span>
      </div>
      <div className="reactions">
        <button>👍 {reactions.like}</button>
        <button>😂 {reactions.laugh}</button>
        <button>😡 {reactions.angry}</button>
        <button>❤️ {reactions.love}</button>
        <button>💪 {reactions.support}</button>
      </div>
    </article>
  );
};

export default Article;
