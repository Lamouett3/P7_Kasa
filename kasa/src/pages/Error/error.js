import './error.css';

function Error() {

  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <div className="error-container">
      <div className="error-text">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <div className="error__home">
        <a href="/" onClick={handleClick}>Retourner sur la page d’accueil</a>
        </div>
      </div>
    </div>
  );
}

export default Error;
