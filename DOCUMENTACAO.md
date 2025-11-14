# Documentação do Projeto - Futsal WebApp

## Visão Geral
Este projeto é uma aplicação web completa para gerenciamento de campeonatos de futsal, desenvolvida com React e TypeScript no front-end, e Node.js com Express e Prisma no back-end. A aplicação permite visualizar campeonatos, acompanhar notícias e gerenciar equipes e jogos.

---

## Estrutura do Projeto

### Front-end (Client)

#### `client/src/main.tsx`
Este é o ponto de entrada da aplicação React. Responsável por inicializar o React, renderizar o componente principal `App` no elemento HTML com id "root", e configurar o roteamento através do `BrowserRouter`. Importa os estilos globais e as bibliotecas do Bootstrap para garantir uma base de design consistente em toda a aplicação.

#### `client/src/App.tsx`
Componente principal que estrutura o layout da aplicação. Utiliza um container flexível que ocupa toda a altura da viewport (`min-vh-100`) para garantir que o footer fique sempre no rodapé. Define todas as rotas da aplicação através do React Router: página inicial (`/`), campeonatos (`/campeonatos`), notícias (`/noticias`) e área administrativa (`/admin`). Integra os componentes Navbar e Footer para criar uma experiência de navegação consistente.

#### `client/src/components/Navbar.tsx`
Barra de navegação responsiva que utiliza o hook `useLocation` do React Router para destacar visualmente o link da página atual. Implementa um menu colapsável para dispositivos móveis usando os componentes do Bootstrap. Apresenta links para as principais seções da aplicação e um botão de acesso à área administrativa. O estilo utiliza um gradiente roxo/azul para criar uma identidade visual atrativa.

#### `client/src/components/footer.tsx`
Componente de rodapé que exibe informações sobre a aplicação, incluindo o ano atual dinamicamente gerado através de `new Date().getFullYear()`. Utiliza um gradiente escuro para contrastar com o restante da interface. O rodapé permanece sempre visível no final da página graças ao layout flexível definido no App principal.

#### `client/src/pages/Home.tsx`
Página inicial que serve como landing page da aplicação. Apresenta uma seção hero com mensagem de boas-vindas e call-to-actions para as principais funcionalidades. Exibe três cards de destaque (Campeonatos, Notícias e Administração) que funcionam como portais de navegação para as respectivas seções. Utiliza animações de fade-in para melhorar a experiência visual durante o carregamento.

#### `client/src/pages/Campeonatos.tsx`
Página dinâmica que busca e exibe a lista de campeonatos cadastrados no banco de dados. Utiliza os hooks `useState` e `useEffect` do React para gerenciar o ciclo de vida dos dados: estado de carregamento, dados dos campeonatos e possíveis erros. Faz requisições HTTP para a API através do endpoint `/api/campeonatos` e renderiza os resultados em cards responsivos. Implementa tratamento de erros com mensagens amigáveis e exibe um spinner de carregamento durante a busca dos dados.

#### `client/src/pages/Noticias.tsx`
Similar à página de Campeonatos, esta página exibe as notícias do sistema. Busca dados do endpoint `/api/noticias` e apresenta cada notícia em um card com título, data formatada em português brasileiro e um preview do conteúdo (limitado a 150 caracteres). Utiliza formatação de data nativa do JavaScript para exibir as datas no padrão brasileiro (DD/MM/YYYY). Implementa os mesmos mecanismos de loading e tratamento de erros da página de campeonatos.

#### `client/src/App.css`
Arquivo de estilos específicos para componentes globais da aplicação. Define estilos para a seção hero (com gradiente e tipografia destacada), cards de funcionalidades com efeitos hover, ícones de features, cabeçalhos de páginas e spinners de carregamento. Utiliza transições suaves para melhorar a interatividade visual.

#### `client/src/pages/Home.css`
Estilos específicos da página inicial, complementando os estilos globais. Define variações para a seção hero (com sombras e tamanhos de fonte otimizados), cards de features com bordas e hover effects aprimorados, e estilos responsivos para dispositivos móveis através de media queries. Garante uma experiência visual consistente em diferentes tamanhos de tela.

#### `client/src/index.css`
Estilos globais da aplicação que definem variáveis CSS customizadas (cores primárias, secundárias, gradientes), reset de estilos padrão do navegador, tipografia base, estilos para botões e cards com animações, e animação de fade-in para transições de página. Serve como base de design system para toda a aplicação.

---

### Back-end (Server)

#### `src/server.ts`
Servidor Express que implementa a API REST da aplicação. Configura middleware de CORS para permitir requisições do front-end e parsing de JSON nas requisições. Implementa endpoints para operações CRUD de campeonatos e notícias:

- **POST /api/campeonatos**: Cria um novo campeonato no banco de dados
- **GET /api/campeonatos**: Retorna lista de todos os campeonatos
- **GET /api/campeonatos/:id**: Retorna um campeonato específico por ID
- **POST /api/noticias**: Cria uma nova notícia
- **GET /api/noticias**: Retorna todas as notícias ordenadas por data (mais recentes primeiro)

Utiliza Prisma ORM para interagir com o banco de dados, garantindo type-safety e queries otimizadas. Implementa tratamento de erros com códigos de status HTTP apropriados (400 para erros de validação, 404 para recursos não encontrados, 500 para erros do servidor).

#### `src/lib/prisma.ts`
Módulo que exporta uma instância singleton do PrismaClient. Este padrão é importante para evitar múltiplas conexões com o banco de dados em ambientes como desenvolvimento com hot-reload. O PrismaClient é gerado automaticamente a partir do schema.prisma e fornece uma API type-safe para todas as operações do banco de dados.

---

### Banco de Dados

#### `prisma/schema.prisma`
Schema do Prisma que define a estrutura do banco de dados SQLite. Define quatro modelos principais:

**Campeonato**: Representa um campeonato com id, nome e ano. Possui relações um-para-muitos com Equipe e Jogo.

**Equipe**: Representa uma equipe de futsal com id e nome único. Pertence a um campeonato e pode participar de vários jogos (tanto como equipe da casa quanto como visitante).

**Jogo**: Representa uma partida entre duas equipes. Contém informações sobre fase do campeonato, placares, e relações com campeonato e equipes participantes. Utiliza relações nomeadas para distinguir entre equipe da casa (`EquipeCasa`) e equipe visitante (`EquipeFora`).

**Noticia**: Representa uma notícia com id, título, conteúdo e data de publicação (gerada automaticamente).

O schema utiliza anotações Prisma para definir chaves primárias (`@id`), valores padrão (`@default`), restrições de unicidade (`@unique`) e relacionamentos entre modelos através de `@relation`.

---

## Fluxo de Dados

1. **Front-end**: O usuário interage com a interface React
2. **API Requests**: Componentes fazem requisições HTTP para endpoints do Express
3. **Back-end**: O servidor Express processa as requisições e utiliza Prisma para consultar/atualizar o banco SQLite
4. **Response**: Os dados são retornados como JSON para o front-end
5. **Renderização**: O React atualiza a interface com os novos dados

---

## Tecnologias Utilizadas

- **Front-end**: React 18, TypeScript, React Router, Bootstrap 5
- **Back-end**: Node.js, Express, TypeScript
- **Banco de Dados**: SQLite com Prisma ORM
- **Build Tool**: Vite
- **Estilização**: CSS3 com variáveis customizadas e gradientes

---

## Funcionalidades Principais

✅ Visualização de campeonatos cadastrados
✅ Leitura de notícias do sistema
✅ Interface responsiva e moderna
✅ Navegação entre páginas com React Router
✅ Tratamento de erros e estados de carregamento
✅ API REST para gerenciamento de dados
✅ Banco de dados relacional com Prisma

---

## Melhorias Futuras

- Implementação completa da área administrativa
- Autenticação e autorização de usuários
- Sistema de gerenciamento de equipes e jogos
- Tabela de classificação automática
- Sistema de busca e filtros
- Upload de imagens para campeonatos e notícias

