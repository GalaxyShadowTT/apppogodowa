export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.country}</h2>
      <div className="weather-content">
        <div className="weather-details">
          <p className="temperature">{Math.round(data.temperature)}°C</p>
          <p className="description">Prędkość wiatru to {data.windspeed} km/h</p>
        </div>
      </div>
    </div>
  );
}