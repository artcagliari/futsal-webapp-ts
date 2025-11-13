# ⚽ Futsal WebApp TypeScript

Sistema completo para gerenciamento de campeonatos de futsal, desenvolvido com TypeScript, React e Express.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API Endpoints](#api-endpoints)
- [Configuração](#configuração)
- [Desenvolvimento](#desenvolvimento)

## 🎯 Sobre o Projeto

O Futsal WebApp é uma aplicação full-stack desenvolvida para gerenciar campeonatos de futsal. O sistema permite:

- Visualizar campeonatos em andamento
- Acompanhar notícias e eventos
- Gerenciar times e jogadores (painel admin)
- Acompanhar classificações e resultados

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **Express 5.1.0** - Framework web para Node.js
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **tsx 4.20.6** - Runtime TypeScript para ES modules
- **CORS 2.8.5** - Middleware para permitir requisições cross-origin
- **concurrently 9.2.1** - Executar múltiplos comandos simultaneamente

### Frontend

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.9.5** - Roteamento para aplicações React
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.2.2** - Build tool e dev server extremamente rápido
- **Bootstrap 5.3.8** - Framework CSS para design responsivo

### Ferramentas de Desenvolvimento

- **ESLint 9.39.1** - Linter para JavaScript/TypeScript
- **TypeScript ESLint 8.46.3** - Linter específico para TypeScript
- **@vitejs/plugin-react 5.1.0** - Plugin do Vite para React

### Type Definitions

- **@types/express 5.0.5** - Tipos TypeScript para Express
- **@types/node 24.10.1** - Tipos TypeScript para Node.js
- **@types/react 19.2.2** - Tipos TypeScript para React
- **@types/react-dom 19.2.2** - Tipos TypeScript para React DOM
- **@types/cors 2.8.19** - Tipos TypeScript para CORS

## 📁 Estrutura do Projeto

```
futsal-webapp-ts/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   │   ├── Navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── pages/          # Páginas da aplicação
│   │   │   ├── Home.tsx
│   │   │   ├── Campeonatos.tsx
│   │   │   └── Noticias.tsx
│   │   ├── App.tsx         # Componente principal
│   │   ├── App.css         # Estilos do App
│   │   ├── main.tsx        # Ponto de entrada
│   │   └── index.css       # Estilos globais
│   ├── public/             # Arquivos estáticos
│   ├── index.html          # HTML principal
│   ├── vite.config.ts      # Configuração do Vite
│   ├── package.json        # Dependências do frontend
│   └── tsconfig.json       # Configuração TypeScript do frontend
├── src/
│   └── server.ts           # Servidor Express
├── .vscode/
│   └── launch.json         # Configuração de debug
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências do backend
├── tsconfig.json           # Configuração TypeScript do backend
└── README.md               # Este arquivo
```

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com o Node.js)

Para verificar se estão instalados:

```bash
node --version
npm --version
```

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/artcagliari/futsal-webapp-ts.git
cd futsal-webapp-ts
```

2. Instale as dependências do backend:

```bash
npm install
```

3. Instale as dependências do frontend:

```bash
cd client
npm install
cd ..
```

## ▶️ Como Executar

### Desenvolvimento (Backend + Frontend)

Para executar o servidor backend e o frontend simultaneamente:

```bash
npm run dev
```

Isso irá:
- Iniciar o servidor Express na porta **3001**
- Iniciar o servidor Vite (React) na porta **5173**

### Executar Separadamente

**Backend apenas:**

```bash
npm run dev:server
```

**Frontend apenas:**

```bash
npm run dev:client
```

## 📜 Scripts Disponíveis

### Scripts do Backend (raiz do projeto)

- `npm run dev` - Inicia backend e frontend simultaneamente
- `npm run dev:server` - Inicia apenas o servidor Express
- `npm run dev:client` - Inicia apenas o cliente React

### Scripts do Frontend (pasta client/)

- `npm run dev` - Inicia servidor de desenvolvimento Vite
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🔌 API Endpoints

O servidor Express está rodando em `http://localhost:3001`

### Endpoints Disponíveis

- **GET `/api`** - Mensagem de status da API
  ```json
  {
    "message": "API do Sistema de Futsal está no ar!"
  }
  ```

- **GET `/api/campeonatos`** - Lista todos os campeonatos
  ```json
  [
    { "id": 1, "nome": "Copa Regional 2024" },
    { "id": 2, "nome": "Liga Municipal 2024" }
  ]
  ```

- **GET `/api/noticias`** - Lista todas as notícias
  ```json
  [
    { "id": 1, "titulo": "Final Eletrizante no Municipal" },
    { "id": 2, "titulo": "Novo artilheiro desponta na Copa Regional" }
  ]
  ```

## ⚙️ Configuração

### Proxy do Vite

O Vite está configurado para fazer proxy das requisições `/api` para o servidor Express:

```typescript
// client/vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
    },
  },
}
```

Isso permite que o frontend faça requisições para `/api/*` sem precisar especificar a URL completa.

### TypeScript

O projeto usa TypeScript com configurações modernas:

- **ES Modules** (`"type": "module"`)
- **Module Resolution**: `nodenext`
- **Target**: `esnext`
- **Strict mode** habilitado
- **Verbatim Module Syntax** habilitado

### CORS

O servidor Express está configurado com CORS para permitir requisições do frontend:

```typescript
app.use(cors());
```

## 🎨 Design

O projeto utiliza:

- **Bootstrap 5** para componentes e grid system
- **CSS Custom Properties** para cores e temas
- **Gradientes modernos** para elementos visuais
- **Animações suaves** para melhor UX
- **Design responsivo** para mobile e desktop

## 🔧 Desenvolvimento

### Estrutura de Componentes

- **Navbar**: Barra de navegação com links para as páginas
- **Footer**: Rodapé da aplicação
- **Home**: Página inicial com hero section e cards de features
- **Campeonatos**: Lista de campeonatos disponíveis
- **Notícias**: Lista de notícias do sistema

### Adicionando Novas Rotas

1. Adicione a rota no backend (`src/server.ts`):

```typescript
app.get('/api/nova-rota', (req: Request, res: Response) => {
  res.json({ data: 'exemplo' });
});
```

2. Crie o componente da página no frontend (`client/src/pages/`)

3. Adicione a rota no `App.tsx`:

```typescript
<Route path="/nova-rota" element={<NovaPagina />} />
```

4. Adicione o link na Navbar se necessário

## 📝 Licença

ISC

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.



