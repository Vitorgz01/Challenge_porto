import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  const id = parseInt(params.id);
  const index = registros.findIndex((item) => item.id === id);

  if (index === -1) return NextResponse.json({ error: 'Registro não encontrado' }, { status: 404 });

  registros[index] = { ...registros[index], ...data };
  return NextResponse.json(registros[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const index = registros.findIndex((item) => item.id === id);

  if (index === -1) return NextResponse.json({ error: 'Registro não encontrado' }, { status: 404 });

  const [removed] = registros.splice(index, 1);
  return NextResponse.json(removed);
}
