import { NextResponse } from 'next/server';

let registros = []; // Simulação de base de dados para armazenar registros

// GET - Listar todos os registros
export async function GET() {
  return NextResponse.json(registros);
}

// POST - Criar um novo registro
export async function POST(request: Request) {
  const data = await request.json();
  const novoRegistro = { id: registros.length + 1, ...data };
  registros.push(novoRegistro);
  return NextResponse.json(novoRegistro, { status: 201 });
}
