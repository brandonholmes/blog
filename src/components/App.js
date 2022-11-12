import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { fetchArticles, createArticle } from "../services/articleService";
import { auth } from "../firebaseConfig";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(null);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  useEffect(() => {
    setWriting(false);
  }, [article]);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        <h3>Blog</h3>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {user && <SignOut />}
        {!user && <SignIn />}
      </header>
      {user && (
        <Nav
          setWriting={setWriting}
          auth={auth}
          articles={articles}
          setArticle={setArticle}
        />
      )}
      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry setWrtigin={setWriting} addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
    </div>
  );
}
