// Em: src/server.ts

import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma.js'; // Importe o cliente Prisma

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- Rotas da API ---

/* * CRUD para CAMPEONATOS 
 */

// CREATE (Criar)
app.post('/api/campeonatos', async (req: Request, res: Response) => {
  const { nome, ano } = req.body;
  
  try {
    const campeonato = await prisma.campeonato.create({
      data: {
        nome,
        ano: parseInt(ano), // Garante que ano seja número
      },
    });
    res.status(201).json(campeonato);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar campeonato' });
  }
});

// READ (Ler - Todos)
app.get('/api/campeonatos', async (req: Request, res: Response) => {
  const campeonatos = await prisma.campeonato.findMany();
  res.json(campeonatos);
});

// READ (Ler - Um por ID)
app.get('/api/campeonatos/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'ID é obrigatório' });
  }
  const campeonato = await prisma.campeonato.findUnique({
    where: { id: parseInt(id) },
  });
  if (!campeonato) {
    return res.status(404).json({ error: 'Campeonato não encontrado' });
  }
  res.json(campeonato);
});

/* * CRUD para NOTÍCIAS 
 */

// CREATE (Criar)
app.post('/api/noticias', async (req: Request, res: Response) => {
  const { titulo, conteudo } = req.body;
  try {
    const noticia = await prisma.noticia.create({
      data: { titulo, conteudo },
    });
    res.status(201).json(noticia);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar notícia' });
  }
});

// READ (Ler - Todas)
app.get('/api/noticias', async (req: Request, res: Response) => {
  const noticias = await prisma.noticia.findMany({
    orderBy: { dataPublicacao: 'desc' }, // Ordena por mais recente
  });
  res.json(noticias);
});

// (O restante do CRUD de Notícias, Equipes e Jogos seguiria o mesmo padrão)

// --- Iniciar o Servidor ---
app.listen(PORT, () => {
  console.log(`Servidor back-end rodando em http://localhost:${PORT}`);
});