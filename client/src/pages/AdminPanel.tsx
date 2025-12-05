import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AdminPanel() {
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const [nomeCamp, setNomeCamp] = useState('');
  const [anoCamp, setAnoCamp] = useState(new Date().getFullYear());
  const [message, setMessage] = useState('');
  const [tituloNoticia, setTituloNoticia] = useState('');
  const [conteudoNoticia, setConteudoNoticia] = useState('');
  const [messageNoticia, setMessageNoticia] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddCampeonato = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/campeonatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nome: nomeCamp, ano: anoCamp }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Falha ao criar campeonato');
      }

      setMessage('Campeonato criado com sucesso!');
      setNomeCamp('');
      setAnoCamp(new Date().getFullYear());

    } catch (err: any) {
      setMessage(`Erro: ${err.message}`);
    }
  };

  const handleAddNoticia = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessageNoticia('');

    if (!tituloNoticia.trim() || !conteudoNoticia.trim()) {
      setMessageNoticia('Por favor, preencha todos os campos');
      return;
    }

    try {
      const response = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          titulo: tituloNoticia, 
          conteudo: conteudoNoticia 
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Falha ao criar notícia');
      }

      setMessageNoticia('Notícia criada com sucesso!');
      setTituloNoticia('');
      setConteudoNoticia('');

    } catch (err: any) {
      setMessageNoticia(`Erro: ${err.message}`);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Painel Administrativo</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout 
        </button>
      </div>
      <hr />

      <h3>Adicionar Novo Campeonato</h3>
      <form onSubmit={handleAddCampeonato}>
        <div className="mb-3">
          <label className="form-label">Nome do Campeonato</label>
          <input 
            type="text" 
            className="form-control" 
            value={nomeCamp}
            onChange={e => setNomeCamp(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ano</label>
          <input 
            type="number" 
            className="form-control" 
            value={anoCamp}
            onChange={e => setAnoCamp(parseInt(e.target.value))}
          />
        </div>
        {message && <div className="alert alert-info">{message}</div>}
        <button type="submit" className="btn btn-success">Adicionar Campeonato</button>
      </form>

      <hr className="my-5" />

      <h3>Adicionar Nova Notícia</h3>
      <form onSubmit={handleAddNoticia}>
        <div className="mb-3">
          <label className="form-label">Título da Notícia</label>
          <input 
            type="text" 
            className="form-control" 
            value={tituloNoticia}
            onChange={e => setTituloNoticia(e.target.value)}
            placeholder="Digite o título da notícia"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Conteúdo</label>
          <textarea 
            className="form-control" 
            rows={6}
            value={conteudoNoticia}
            onChange={e => setConteudoNoticia(e.target.value)}
            placeholder="Digite o conteúdo da notícia"
            required
          />
        </div>
        {messageNoticia && (
          <div className={`alert ${messageNoticia.includes('Erro') ? 'alert-danger' : 'alert-success'}`}>
            {messageNoticia}
          </div>
        )}
        <button type="submit" className="btn btn-success">Adicionar Notícia</button>
      </form>
    </div>
  );
}