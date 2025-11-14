import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
    return (
      <div className="fade-in">
        <div className="hero-section">
          <div className="container text-center">
            <h1>Bem-vindo ao nosso sistema de futsal</h1>
            <p className="lead">Aqui você encontra tudo sobre os campeonatos, acompanha as classificações e fica por dentro das últimas novidades do mundo do futsal. Vamos começar?</p>
            <div className="mt-4">
              <Link to="/campeonatos" className="btn btn-light btn-lg me-3" style={{ borderRadius: '8px' }}>
                Ver Campeonatos
              </Link>
              <Link to="/noticias" className="btn btn-outline-light btn-lg" style={{ borderRadius: '8px' }}>
                Ver Notícias
              </Link>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Campeonatos</h3>
                <p>Navegue pelos campeonatos que estão rolando agora! Veja as classificações, resultados e tudo que está acontecendo em tempo real.</p>
                <Link to="/campeonatos" className="btn btn-primary mt-3">
                  Explorar →
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">📰</div>
                <h3>Notícias</h3>
                <p>Fique por dentro de tudo! Aqui você encontra as últimas notícias, eventos e novidades que estão movimentando o mundo do futsal.</p>
                <Link to="/noticias" className="btn btn-primary mt-3">
                  Ver Notícias →
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Administração</h3>
                <p>Se você é organizador, aqui está o painel completo para gerenciar seus campeonatos, times e jogadores de forma simples e prática.</p>
                <Link to="/admin" className="btn btn-primary mt-3">
                  Acessar painel →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }