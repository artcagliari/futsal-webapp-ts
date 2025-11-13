// Em: client/src/components/Footer.tsx
export function Footer() {
    return (
      <footer className="mt-auto" style={{
        background: 'linear-gradient(135deg, #212529 0%, #343a40 100%)',
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <h5 className="mb-3">Futsal WebApp</h5>
              <p className="mb-0">Seu sistema completo para gerenciar campeonatos de futsal de forma simples e prática.</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Futsal WebApp TS. Todos os direitos reservados.
              </p>
              <p className="mt-2 mb-0" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Desenvolvido com React + TypeScript
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }