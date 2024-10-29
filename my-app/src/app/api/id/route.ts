// app/api/produtos/[id]/route.ts
import { NextResponse } from 'next/server';
import { Produto } from '../../../../types/Produto';

let produtos: Produto[] = []; // Base de dados em memória

// Função GET para obter um produto específico
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const produto = produtos.find((p) => p.id === parseInt(params.id));

  if (!produto) {
    return NextResponse.json({ message: 'Produto não encontrado' }, { status: 404 });
  }

  return NextResponse.json(produto);
}

// Função PUT para atualizar um produto específico
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { nome, descricao, preco } = await request.json();
  const id = parseInt(params.id);

  let produtoIndex = produtos.findIndex((p) => p.id === id);

  if (produtoIndex === -1) {
    return NextResponse.json({ message: 'Produto não encontrado' }, { status: 404 });
  }

  produtos[produtoIndex] = { id, nome, descricao, preco };
  return NextResponse.json(produtos[produtoIndex]);
}

// Função DELETE para excluir um produto específico
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  produtos = produtos.filter((p) => p.id !== id);

  return NextResponse.json({ message: 'Produto excluído com sucesso' });
}
