import vocabulary from "./data/vocabulary.json";
import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Daily Vocabulary</h1>
      <p>Learn a little Japanese every day 🌸</p>

      <div className="word-grid">
        {vocabulary.map((item) => (
          <article className="word-card" key={item.id}>
            <h2>{item.word}</h2>
            <p className="reading">{item.reading}</p>
            <p><strong>English:</strong> {item.meaningEn}</p>
            <p><strong>বাংলা:</strong> {item.meaningBn}</p>
            <p><strong>Example:</strong> {item.example}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default App;