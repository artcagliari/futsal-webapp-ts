import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma.js';
import { authMiddleware } from './middleware/authMiddleware.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/campeonatos', authMiddleware, async (req: Request, res: Response) => {
  const { nome, ano } = req.body;
  
  try {
    const campeonato = await prisma.campeonato.create({
      data: {
        nome,
        ano: parseInt(ano),
      },
    });
    res.status(201).json(campeonato);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar campeonato' });
  }
});

app.get('/api/campeonatos', async (req: Request, res: Response) => {
  const campeonatos = await prisma.campeonato.findMany();
  res.json(campeonatos);
});

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

app.post('/api/noticias', authMiddleware, async (req: Request, res: Response) => {
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

app.get('/api/noticias', async (req: Request, res: Response) => {
  const noticias = await prisma.noticia.findMany({
    orderBy: { dataPublicacao: 'desc' },
  });
  res.json(noticias);
});
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'seu-secret-aqui',
      { expiresIn: '24h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

app.post('/api/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'seu-secret-aqui',
      { expiresIn: '24h' }
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor back-end rodando em http://localhost:${PORT}`);
});