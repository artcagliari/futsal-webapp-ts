import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: '1.5rem' }}>
          Futsal WebApp
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`} 
                to="/"
              >
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/campeonatos' ? 'active fw-bold' : ''}`} 
                to="/campeonatos"
              >
                Campeonatos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/noticias' ? 'active fw-bold' : ''}`} 
                to="/noticias"
              >
                Notícias
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-light" to="/register" style={{ borderRadius: '8px' }}>
              Cadastrar
            </Link>
            <Link className="btn btn-outline-light" to="/login" style={{ borderRadius: '8px' }}>
              Login
            </Link>
            <Link className="btn btn-light" to="/admin" style={{ borderRadius: '8px' }}>
              Área Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}