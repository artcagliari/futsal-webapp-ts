// Em: client/src/pages/Campeonatos.tsx
import { useState, useEffect } from 'react';

// Definindo um tipo para os dados do campeonato
type Campeonato = {
  id: number;
  nome: string;
  ano: number;
};

export function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState<Campeonato[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Busca os dados da API usando o proxy do Vite
    fetch('/api/campeonatos')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar campeonatos');
        return res.json();
      })
      .then(data => {
        setCampeonatos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar campeonatos:", error);
        setError('Ops! Algo deu errado ao carregar os campeonatos. Que tal tentar novamente?');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5 fade-in">
      <div className="page-header">
        <h1>Campeonatos</h1>
        <p className="lead text-muted">Aqui estão todos os campeonatos que estão rolando! Escolha um e acompanhe de perto.</p>
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p className="text-muted">Buscando os campeonatos para você...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-warning" role="alert" style={{ borderRadius: '12px' }}>
          <strong>Ops, algo deu errado!</strong>
          <p className="mb-0">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {campeonatos.length === 0 ? (
            <div className="alert alert-info" role="alert" style={{ borderRadius: '12px' }}>
              <strong>Nada por aqui ainda...</strong>
              <p className="mb-0">Ainda não temos campeonatos cadastrados, mas em breve teremos novidades! Fique de olho.</p>
            </div>
          ) : (
            <>
              <p className="text-muted mb-4">
                Encontramos <strong>{campeonatos.length}</strong> {campeonatos.length === 1 ? 'campeonato' : 'campeonatos'} para você!
              </p>
              <div className="row g-4">
                {campeonatos.map(camp => (
                  <div key={camp.id} className="col-md-6 col-lg-4">
                    <div className="card h-100">
                      <div className="card-body">
                      <h5 className="card-title mb-3">{camp.nome}</h5>
                        <p className="card-text text-muted mb-2">
                          <span className="badge bg-primary me-2">{camp.ano}</span>
                          <span className="badge bg-success">Em andamento</span>
                        </p>
                        <button className="btn btn-primary w-100">
                          Ver tudo sobre este campeonato →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}