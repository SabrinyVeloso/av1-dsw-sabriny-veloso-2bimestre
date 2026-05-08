import { prisma } from "../config/prisma.js";

/**
 * LISTAR LIVROS
 * GET /livros
 */
export async function listarLivros(req, res) {

  try {

    const livros = await prisma.livro.findMany({
      include: {
        categoria: true
      }
    });

    res.json(livros);

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao listar livros"
    });

  }
}

/**
 * OBTER LIVRO POR ID
 * GET /livros/:id
 */
export async function obterLivro(req, res) {

  const idNumero = Number(req.params.id);

  if (Number.isNaN(idNumero)) {
    return res.status(400).json({
      erro: "ID inválido"
    });
  }

  try {

    const livro = await prisma.livro.findUnique({
      where: {
        id: idNumero
      }
    });

    if (!livro) {
      return res.status(404).json({
        erro: "Livro não encontrado"
      });
    }

    res.json(livro);

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao buscar livro"
    });

  }
}

/**
 * CRIAR LIVRO
 * POST /livros
 */
export async function criarLivro(req, res) {

  const {
    titulo,
    autor,
    genero,
    descricao,
    ano
  } = req.body;

  if (!titulo || !autor || !genero || !ano) {

    return res.status(400).json({
      erro: "Preencha todos os campos obrigatórios"
    });

  }

  try {

    const livroCriado = await prisma.livro.create({
      data: {
        titulo,
        autor,
        genero,
        descricao,
        ano
      }
    });

    res.status(201).json({
      mensagem: "Livro criado com sucesso!",
      livro: livroCriado
    });

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao criar livro"
    });

  }
}

/**
 * ATUALIZAR LIVRO
 * PUT /livros/:id
 */
export async function atualizarLivro(req, res) {

  const idNumero = Number(req.params.id);

  if (Number.isNaN(idNumero)) {

    return res.status(400).json({
      erro: "ID inválido"
    });

  }

  const {
    titulo,
    autor,
    genero,
    descricao,
    ano
  } = req.body;

  try {

    const livroAtualizado = await prisma.livro.update({
      where: {
        id: idNumero
      },
      data: {
        titulo,
        autor,
        genero,
        descricao,
        ano
      }
    });

    res.json({
      mensagem: "Livro atualizado com sucesso!",
      livro: livroAtualizado
    });

  } catch (error) {

    res.status(404).json({
      erro: "Livro não encontrado"
    });

  }
}

/**
 * EXCLUIR LIVRO
 * DELETE /livros/:id
 */
export async function excluirLivro(req, res) {

  const idNumero = Number(req.params.id);

  if (Number.isNaN(idNumero)) {

    return res.status(400).json({
      erro: "ID inválido"
    });

  }

  try {

    const livroRemovido = await prisma.livro.delete({
      where: {
        id: idNumero
      }
    });

    res.json({
      mensagem: "Livro excluído com sucesso!",
      livro: livroRemovido
    });

  } catch (error) {

    res.status(404).json({
      erro: "Livro não encontrado"
    });

  }
}