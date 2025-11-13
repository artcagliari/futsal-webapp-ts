// Em: client/src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { Campeonatos } from './pages/Campeonatos';
import { Noticias } from './pages/Noticias';

function App() {
  return (
    // Usamos 'd-flex flex-column' e 'min-vh-100' para fazer o footer grudar no final
    <div className="d-flex flex-column min-vh-100"> 
      <Navbar />

      {/* O 'Routes' define a área onde as páginas vão trocar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/noticias" element={<Noticias />} />
        {/* Adicione a rota /admin (por enquanto pode levar para Home) */}
        <Route path="/admin" element={<h1>Painel Admin (Em breve)</h1>} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;