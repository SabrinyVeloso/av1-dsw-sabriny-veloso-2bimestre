import { prisma } from "../config/prisma.js";

export async function listarTodos() {
  return await prisma.livro.findMany({
    include: {
      categoria: true
    }
  });
}

export async function buscarPorId(id) {
  return await prisma.livro.findUnique({
    where: {
      id
    }
  });
}

export async function criar(dados) {
  return await prisma.livro.create({
    data: dados
  });
}

export async function atualizar(id, dados) {
  return await prisma.livro.update({
    where: {
      id
    },
    data: dados
  });
}

export async function excluir(id) {
  return await prisma.livro.delete({
    where: {
      id
    }
  });
}