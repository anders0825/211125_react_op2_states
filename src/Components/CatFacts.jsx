/* JSX
CatFacts
*/

import { useState, useEffect } from "react";

const API_PATH = `https://catfact.ninja/`;

export default function CatFacts() {
  // JavaScript:
  const [facts, setFacts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataAPI();
  }, []);

  async function fetchDataAPI(num = 5) {
    const url = `${API_PATH}facts?limit=${num}`;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      if (!res.ok) throw new Error("fetchDataAPI error");
      const data = await res.json();

      setFacts(data.data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="CatFacts-cont" className="Component-cont">
      <h2>Cat Facts:</h2>
      <ul>
        {facts.map((fact, idx) => (
          <li key={idx}>{fact.fact}</li>
        ))}
      </ul>
    </section>
  );
}
