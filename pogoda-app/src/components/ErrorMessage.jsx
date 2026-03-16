export default function ErrorMessage({ message }) {
  if (!message) return null;
  
  return (
    <div className="error-message">
      <p>errorsir {message}</p>
    </div>
  );
}