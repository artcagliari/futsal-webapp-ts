# ⚽ Futsal WebApp TypeScript

Sistema completo para gerenciamento de campeonatos de futsal, desenvolvido com TypeScript, React e Express.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Banco de Dados](#banco-de-dados)
- [Autenticação](#autenticação)
- [API Endpoints](#api-endpoints)
- [Funcionalidades](#funcionalidades)

## 🎯 Sobre o Projeto

O Futsal WebApp é uma aplicação full-stack desenvolvida para gerenciar campeonatos de futsal. O sistema permite:

- Visualizar campeonatos em andamento
- Acompanhar notícias e eventos
- Gerenciar campeonatos e notícias através do painel administrativo
- Sistema de autenticação com login e registro
- Acompanhar classificações e resultados

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript para executar o servidor
- **Express 5.1.0** - Framework web minimalista para Node.js, usado para criar a API REST
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática, garante maior segurança no código
- **tsx 4.20.6** - Runtime TypeScript que permite executar arquivos .ts diretamente, suporta ES modules
- **Prisma 6.19.0** - ORM moderno para TypeScript, facilita o trabalho com banco de dados
- **SQLite** - Banco de dados relacional leve, armazenado em arquivo local
- **bcryptjs 3.0.3** - Biblioteca para hash de senhas, garante segurança na autenticação
- **jsonwebtoken 9.0.2** - Geração e validação de tokens JWT para autenticação
- **CORS 2.8.5** - Middleware para permitir requisições cross-origin entre frontend e backend
- **concurrently 9.2.1** - Executa múltiplos comandos simultaneamente (backend + frontend)

### Frontend

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces de usuário
- **React Router DOM 7.9.5** - Sistema de roteamento para aplicações React (SPA)
- **TypeScript 5.9.3** - Tipagem estática no frontend também
- **Vite 7.2.2** - Build tool extremamente rápido, substitui o Webpack/CRA
- **Bootstrap 5.3.8** - Framework CSS para design responsivo e componentes prontos

### Ferramentas de Desenvolvimento

- **ESLint 9.39.1** - Linter para identificar problemas no código JavaScript/TypeScript
- **TypeScript ESLint 8.46.3** - Regras específicas do ESLint para TypeScript
- **@vitejs/plugin-react 5.1.0** - Plugin do Vite para suportar React

### Type Definitions

- **@types/express 5.0.5** - Tipos TypeScript para Express
- **@types/node 24.10.1** - Tipos TypeScript para Node.js
- **@types/react 19.2.2** - Tipos TypeScript para React
- **@types/react-dom 19.2.2** - Tipos TypeScript para React DOM
- **@types/cors 2.8.19** - Tipos TypeScript para CORS
- **@types/bcryptjs 2.4.6** - Tipos TypeScript para bcryptjs
- **@types/jsonwebtoken 9.0.10** - Tipos TypeScript para jsonwebtoken

## 📁 Estrutura do Projeto

```
futsal-webapp-ts/
├── client/                      # Frontend React
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── Navbar.tsx       # Barra de navegação
│   │   │   ├── footer.tsx      # Rodapé
│   │   │   └── ProtectedRoute.tsx  # Rota protegida (requer login)
│   │   ├── pages/              # Páginas da aplicação
│   │   │   ├── Home.tsx         # Página inicial
│   │   │   ├── Campeonatos.tsx  # Lista de campeonatos
│   │   │   ├── Noticias.tsx     # Lista de notícias
│   │   │   ├── LoginPage.tsx    # Página de login
│   │   │   ├── RegisterPage.tsx # Página de registro
│   │   │   └── AdminPanel.tsx   # Painel administrativo
│   │   ├── context/             # Context API do React
│   │   │   └── AuthContext.tsx # Contexto de autenticação
│   │   ├── App.tsx              # Componente principal
│   │   ├── App.css              # Estilos do App
│   │   ├── main.tsx             # Ponto de entrada
│   │   └── index.css            # Estilos globais
│   ├── public/                  # Arquivos estáticos
│   ├── index.html               # HTML principal
│   ├── vite.config.ts           # Configuração do Vite (com proxy)
│   ├── package.json             # Dependências do frontend
│   └── tsconfig.json            # Configuração TypeScript do frontend
├── src/                         # Backend Express
│   ├── lib/
│   │   └── prisma.ts            # Instância do Prisma Client
│   ├── middleware/
│   │   └── authMiddleware.ts    # Middleware de autenticação JWT
│   └── server.ts                # Servidor Express e rotas da API
├── prisma/
│   ├── schema.prisma            # Schema do banco de dados
│   ├── migrations/              # Migrações do banco
│   │   └── 20251113171916_init/
│   │       └── migration.sql
│   ├── seed.ts                  # Script para popular banco (admin pré-pronto)
│   └── dev.db                   # Arquivo do banco SQLite
├── .vscode/
│   └── launch.json              # Configuração de debug
├── .gitignore                   # Arquivos ignorados pelo Git
├── .env                         # Variáveis de ambiente (DATABASE_URL)
├── package.json                 # Dependências do backend
├── tsconfig.json                # Configuração TypeScript do backend
└── README.md                    # Este arquivo
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

4. Configure o banco de dados:

Crie um arquivo `.env` na raiz do projeto (se não existir):

```bash
DATABASE_URL="file:./prisma/dev.db"
```

5. Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

6. (Opcional) Popule o banco com dados iniciais (cria admin pré-pronto):

```bash
npm run seed
```

Isso criará um usuário admin:
- **Email**: `admin@futsal.com`
- **Senha**: `admin123`

## ▶️ Como Executar

### Desenvolvimento (Backend + Frontend Simultaneamente)

Para executar o servidor backend e o frontend ao mesmo tempo:

```bash
npm run dev
```

Isso irá:
- Iniciar o servidor Express na porta **3001**
- Iniciar o servidor Vite (React) na porta **5173**

Acesse `http://localhost:5173` no navegador.

### Executar Separadamente

**Backend apenas:**

```bash
npm run dev:server
```

O servidor estará disponível em `http://localhost:3001`

**Frontend apenas:**

```bash
npm run dev:client
```

O frontend estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

### Scripts do Backend (raiz do projeto)

- `npm run dev` - Inicia backend e frontend simultaneamente
- `npm run dev:server` - Inicia apenas o servidor Express
- `npm run dev:client` - Inicia apenas o cliente React
- `npm run seed` - Executa o script de seed (cria admin pré-pronto)

### Scripts do Frontend (pasta client/)

- `npm run dev` - Inicia servidor de desenvolvimento Vite
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🗄️ Banco de Dados

### Prisma ORM

O projeto usa **Prisma** como ORM (Object-Relational Mapping) para gerenciar o banco de dados.

**Modelos do Banco:**

1. **Campeonato**
   - `id`: ID único
   - `nome`: Nome do campeonato
   - `ano`: Ano do campeonato
   - Relacionamentos: `equipes`, `jogos`

2. **Equipe**
   - `id`: ID único
   - `nome`: Nome da equipe (único)
   - `campeonatoId`: ID do campeonato
   - Relacionamentos: `campeonato`, `jogosCasa`, `jogosFora`

3. **Jogo**
   - `id`: ID único
   - `fase`: Fase do jogo (ex: "Fase de Grupos")
   - `placar1`: Placar da equipe 1
   - `placar2`: Placar da equipe 2
   - `campeonatoId`: ID do campeonato
   - `equipe1Id`: ID da equipe 1
   - `equipe2Id`: ID da equipe 2

4. **Noticia**
   - `id`: ID único
   - `titulo`: Título da notícia
   - `conteudo`: Conteúdo da notícia
   - `dataPublicacao`: Data de publicação (automática)

5. **User**
   - `id`: ID único
   - `email`: Email do usuário (único)
   - `password`: Hash da senha

### Comandos do Prisma

```bash
# Criar uma nova migração
npx prisma migrate dev --name nome_da_migracao

# Ver status das migrações
npx prisma migrate status

# Gerar o Prisma Client (após mudanças no schema)
npx prisma generate

# Abrir o Prisma Studio (interface visual do banco)
npx prisma studio
```

## 🔐 Autenticação

O sistema usa **JWT (JSON Web Tokens)** para autenticação.

### Fluxo de Autenticação

1. **Registro/Login**: Usuário faz login ou se registra
2. **Token JWT**: Servidor retorna um token JWT
3. **Armazenamento**: Token é salvo no `localStorage` do navegador
4. **Requisições Protegidas**: Token é enviado no header `Authorization: Bearer <token>`
5. **Middleware**: `authMiddleware` valida o token antes de permitir acesso

### Rotas Protegidas

As seguintes rotas requerem autenticação:
- `POST /api/campeonatos` - Criar campeonato
- `POST /api/noticias` - Criar notícia

### Usuário Admin Pré-pronto

Após executar `npm run seed`, você terá:
- **Email**: `admin@futsal.com`
- **Senha**: `admin123`

## 🔌 API Endpoints

O servidor Express está rodando em `http://localhost:3001`

### Endpoints Públicos (não requerem autenticação)

- **GET `/api/campeonatos`** - Lista todos os campeonatos
  ```json
  [
    { "id": 1, "nome": "Copa Regional 2024", "ano": 2024 },
    { "id": 2, "nome": "Liga Municipal 2024", "ano": 2024 }
  ]
  ```

- **GET `/api/campeonatos/:id`** - Busca um campeonato por ID
  ```json
  { "id": 1, "nome": "Copa Regional 2024", "ano": 2024 }
  ```

- **GET `/api/noticias`** - Lista todas as notícias (ordenadas por data)
  ```json
  [
    {
      "id": 1,
      "titulo": "Final Eletrizante no Municipal",
      "conteudo": "Conteúdo da notícia...",
      "dataPublicacao": "2024-11-13T19:00:00.000Z"
    }
  ]
  ```

- **POST `/api/login`** - Faz login
  ```json
  // Request
  { "email": "admin@futsal.com", "password": "admin123" }
  
  // Response
  { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
  ```

- **POST `/api/register`** - Registra novo usuário
  ```json
  // Request
  { "email": "user@example.com", "password": "senha123" }
  
  // Response
  { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
  ```

### Endpoints Protegidos (requerem token JWT)

- **POST `/api/campeonatos`** - Cria um novo campeonato
  ```json
  // Headers
  Authorization: Bearer <token>
  
  // Request
  { "nome": "Copa Regional 2024", "ano": 2024 }
  
  // Response
  { "id": 1, "nome": "Copa Regional 2024", "ano": 2024 }
  ```

- **POST `/api/noticias`** - Cria uma nova notícia
  ```json
  // Headers
  Authorization: Bearer <token>
  
  // Request
  { "titulo": "Título da notícia", "conteudo": "Conteúdo completo..." }
  
  // Response
  {
    "id": 1,
    "titulo": "Título da notícia",
    "conteudo": "Conteúdo completo...",
    "dataPublicacao": "2024-11-13T19:00:00.000Z"
  }
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

Isso permite que o frontend faça requisições para `/api/*` sem precisar especificar a URL completa do backend.

### TypeScript

O projeto usa TypeScript com configurações modernas:

- **ES Modules** (`"type": "module"`)
- **Module Resolution**: `nodenext`
- **Target**: `esnext`
- **Strict mode** habilitado
- **Verbatim Module Syntax** habilitado (requer `import type` para tipos)

### CORS

O servidor Express está configurado com CORS para permitir requisições do frontend:

```typescript
app.use(cors());
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="seu-secret-aqui"  # Opcional, padrão é usado se não definido
```

## 🎨 Design

O projeto utiliza:

- **Bootstrap 5** para componentes e grid system
- **CSS Custom Properties** para cores e temas
- **Gradientes modernos** para elementos visuais
- **Animações suaves** (fade-in) para melhor UX
- **Design responsivo** para mobile e desktop
- **Cards interativos** com hover effects

## 🔧 Funcionalidades

### Páginas Públicas

1. **Home** (`/`)
   - Hero section com boas-vindas
   - Cards de features (Campeonatos, Notícias, Admin)
   - Links para outras páginas

2. **Campeonatos** (`/campeonatos`)
   - Lista todos os campeonatos cadastrados
   - Exibe nome e ano de cada campeonato
   - Estados de loading e erro
   - Mensagem quando não há campeonatos

3. **Notícias** (`/noticias`)
   - Lista todas as notícias (mais recentes primeiro)
   - Exibe título, conteúdo (resumo) e data
   - Estados de loading e erro
   - Mensagem quando não há notícias

4. **Login** (`/login`)
   - Formulário de login
   - Validação de credenciais
   - Redireciona para `/admin` após login bem-sucedido
   - Link para página de registro

5. **Registro** (`/register`)
   - Formulário de cadastro
   - Validação de senhas (confirmação e tamanho mínimo)
   - Login automático após registro
   - Link para página de login

### Páginas Protegidas

6. **Admin Panel** (`/admin`)
   - Requer autenticação (redireciona para login se não autenticado)
   - Formulário para criar campeonatos
   - Formulário para criar notícias
   - Botão de logout
   - Mensagens de sucesso/erro

### Componentes

- **Navbar**: Barra de navegação com links e botões de login/registro
- **Footer**: Rodapé com informações do sistema
- **ProtectedRoute**: Componente que protege rotas, redireciona para login se não autenticado

### Context API

- **AuthContext**: Gerencia estado de autenticação globalmente
  - `token`: Token JWT atual
  - `login(token)`: Faz login e salva token
  - `logout()`: Faz logout e remove token
  - `isAuthenticated`: Boolean indicando se está autenticado

## 🚀 Como Usar

### Primeira Execução

1. Instale as dependências:
```bash
npm install
cd client && npm install && cd ..
```

2. Configure o banco:
```bash
# Crie o arquivo .env se não existir
echo 'DATABASE_URL="file:./prisma/dev.db"' > .env

# Execute as migrações
npx prisma migrate dev

# Crie o admin pré-pronto
npm run seed
```

3. Inicie o servidor:
```bash
npm run dev
```

4. Acesse `http://localhost:5173`

### Fazer Login

1. Acesse `http://localhost:5173/login`
2. Use as credenciais:
   - Email: `admin@futsal.com`
   - Senha: `admin123`
3. Você será redirecionado para `/admin`

### Criar Conteúdo

No painel admin (`/admin`):

1. **Criar Campeonato**:
   - Preencha nome e ano
   - Clique em "Adicionar Campeonato"

2. **Criar Notícia**:
   - Preencha título e conteúdo
   - Clique em "Adicionar Notícia"

O conteúdo aparecerá automaticamente nas páginas públicas.

## 📝 Licença

ISC

## 👤 Autor

Desenvolvido por [artcagliari](https://github.com/artcagliari)

---

**Desenvolvido com React + TypeScript + Express + Prisma**
