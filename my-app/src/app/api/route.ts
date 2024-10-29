// app/api/produtos/route.ts
import { NextResponse } from 'next/server';
import { Produto } from '../../../types/Produto';

let produtos: Produto[] = []; // Base de dados em memória

// Função GET para listar todos os produtos
export async function GET() {
  return NextResponse.json(produtos);
}

// Função POST para criar um novo produto
export async function POST(request: Request) {
  const { nome, descricao, preco } = await request.json();

  const novoProduto: Produto = {
    id: Date.now(),
    nome,
    descricao,
    preco,
  };

  produtos.push(novoProduto);
  return NextResponse.json(novoProduto, { status: 201 });
}
