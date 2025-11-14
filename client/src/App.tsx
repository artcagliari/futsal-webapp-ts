import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { Campeonatos } from './pages/Campeonatos';
import { Noticias } from './pages/Noticias';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/admin" element={<h1>Painel Admin (Em breve)</h1>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;