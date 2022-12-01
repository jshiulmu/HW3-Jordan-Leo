export default function Nav({ articles, setArticle }) {
  return (
    <nav className="Nav">
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}
