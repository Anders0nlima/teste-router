import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const response = await axios.get('http://localhost:8080/api/guides');
      setGuides(response.data);
    };

    fetchGuides();
  }, []);

  return (
    <div className="home-page">
      <h2>Guias Disponíveis</h2>
      {guides.map((guide) => (
        <div key={guide.id} className="guide-card">
          <h3>{guide.name}</h3>
          <p>Idioma: {guide.language}</p>
          <Link to={`/guide/${guide.id}`}>Ver Detalhes</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
