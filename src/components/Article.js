import { format } from "date-fns";

export default function Article({ article, setWriting }) {
  let formattedDate;
  if (article) {
    let d = new Date(
      article.date.seconds * 1000 + article.date.nanoseconds / 1000000
    );
    formattedDate = format(d, "MM/dd/yyyy h:mm a");
  }
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${formattedDate}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
