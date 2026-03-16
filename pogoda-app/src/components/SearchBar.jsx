import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (city.trim().length < 2) {
      setError('Nazwa miasta musi mieć co najmniej 2 znaki.');
      return;
    }
    
    setError('');
    onSearch(city);
    setCity(''); 
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Wpisz nazwę miasts" className="search-input"
        />
        <button type="submit" className="search-button">Szuka</button>
      </form>
      {error && <p className="validation-error">{error}</p>}
    </div>
  );
}