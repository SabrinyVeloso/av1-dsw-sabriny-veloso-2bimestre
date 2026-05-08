import express from "express";

import {
  listarLivros,
  obterLivro,
  criarLivro,
  atualizarLivro,
  excluirLivro
} from "../controllers/livroController.js";

const router = express.Router();

/**
 * LISTAR TODOS OS LIVROS
 */
router.get("/", listarLivros);

/**
 * BUSCAR LIVRO POR ID
 */
router.get("/:id", obterLivro);

/**
 * CRIAR LIVRO
 */
router.post("/", criarLivro);

/**
 * ATUALIZAR LIVRO
 */
router.put("/:id", atualizarLivro);

/**
 * EXCLUIR LIVRO
 */
router.delete("/:id", excluirLivro);

export default router;