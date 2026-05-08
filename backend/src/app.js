// ========================================
// APP - CONFIGURAÇÃO DA APLICAÇÃO
// ========================================

import express from "express";
import livroRoutes from "./routes/livroRoutes.js";

// Cria a aplicação Express
const app = express();

// ========================================
// MIDDLEWARES
// ========================================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ========================================
// ROTAS
// ========================================

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de livros funcionando!",
    versao: "2.0",
    arquitetura: "MVC"
  });
});

// ROTAS DE LIVROS
app.use("/livros", livroRoutes);

// ========================================
// 404
// ========================================

app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada",
    metodo: req.method,
    url: req.url
  });
});

export default app;