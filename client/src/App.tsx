import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { Campeonatos } from './pages/Campeonatos';
import { Noticias } from './pages/Noticias';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AdminPanel } from './pages/AdminPanel';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={<AdminPanel />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;