// Em: client/src/pages/Noticias.tsx
import { useState, useEffect } from 'react';

type Noticia = {
  id: number;
  titulo: string;
  conteudo: string;
  dataPublicacao: string;
};

export function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Busca os dados da API usando o proxy do Vite
    fetch('/api/noticias')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar notícias');
        return res.json();
      })
      .then(data => {
        setNoticias(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar notícias:", error);
        setError('Ops! Algo deu errado ao carregar as notícias. Que tal tentar novamente?');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5 fade-in">
      <div className="page-header">
        <h1>Últimas Notícias</h1>
        <p className="lead text-muted">Fique por dentro de tudo que está acontecendo no mundo do futsal! Aqui você encontra as novidades mais quentes.</p>
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p className="text-muted">Buscando as últimas notícias para você...</p>
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
          {noticias.length === 0 ? (
            <div className="alert alert-info" role="alert" style={{ borderRadius: '12px' }}>
              <strong>Nada por aqui ainda...</strong>
              <p className="mb-0">Ainda não temos notícias publicadas, mas em breve teremos novidades! Fique de olho.</p>
            </div>
          ) : (
            <>
              <p className="text-muted mb-4">
                Encontramos <strong>{noticias.length}</strong> {noticias.length === 1 ? 'notícia' : 'notícias'} para você!
              </p>
              <div className="row g-4">
                {noticias.map(noticia => (
                  <div key={noticia.id} className="col-md-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{noticia.titulo}</h5>
                        <p className="card-text text-muted mb-2">
                          <small>
                            {new Date(noticia.dataPublicacao).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </small>
                        </p>
                        <p className="card-text mb-3" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                          {noticia.conteudo.length > 150 
                            ? `${noticia.conteudo.substring(0, 150)}...` 
                            : noticia.conteudo}
                        </p>
                        <button className="btn btn-outline-primary">
                          Ler mais →
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