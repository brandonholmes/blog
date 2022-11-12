export default function Nav({ articles, setArticle, auth, setWriting }) {
  return (
    <nav>
      <p>
        <b>Hello, {auth.currentUser.displayName}</b>
      </p>
      <p>
        <u>My Articles</u>
      </p>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <li key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </li>
          ))}
    </nav>
  );
}
