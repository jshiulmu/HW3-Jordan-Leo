export default function Article({ article, deleter }) {
  return (
    <article className="Article_Box">
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
          <button
            onClick={() => {
              deleter(article.id);
            }}
          >
            Delete Post
          </button>
        </section>
      )}
    </article>
  );
}
