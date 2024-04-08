import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((response) => setQuotes(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(quotes);
  return (
    <>
      <h1>Quote Generator Application</h1>
      <h3>Quotes:</h3>
      {quotes.map((quote, index) => (
        <div key={quote.id}>
          <h2>{quote.text}</h2>
          <p>{quote.author}</p>
        </div>
      ))}
    </>
  );
}

export default App;
