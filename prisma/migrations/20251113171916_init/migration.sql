-- CreateTable
CREATE TABLE "Campeonato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "ano" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Equipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "campeonatoId" INTEGER NOT NULL,
    CONSTRAINT "Equipe_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fase" TEXT NOT NULL,
    "placar1" INTEGER NOT NULL,
    "placar2" INTEGER NOT NULL,
    "campeonatoId" INTEGER NOT NULL,
    "equipe1Id" INTEGER NOT NULL,
    "equipe2Id" INTEGER NOT NULL,
    CONSTRAINT "Jogo_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jogo_equipe1Id_fkey" FOREIGN KEY ("equipe1Id") REFERENCES "Equipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jogo_equipe2Id_fkey" FOREIGN KEY ("equipe2Id") REFERENCES "Equipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dataPublicacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipe_nome_key" ON "Equipe"("nome");
