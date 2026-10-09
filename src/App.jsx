import useFetch from "./useFetch";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=40";

function App() {
  const { data, loading, error } = useFetch(URL);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error(: {error}</p>;

  return (
    <div className="app">
      <h1>Photos</h1>
      <div className="grid">
        {data.map((photo) => (
          <div className="card" key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p title={photo.title}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;