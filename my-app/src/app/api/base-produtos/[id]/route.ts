// src/app/api/base-produtos/[id]/route.ts
import { Produto } from "@/app/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const filePath = process.cwd() + '/src/app/data/base.json';

async function readFile() {
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file) as Produto[];
}

async function writeFile(data: Produto[]) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await readFile();
  const produto = data.find((p) => p.id === Number(params.id));
  return produto ? NextResponse.json(produto) : NextResponse.json({ msg: "Produto não encontrado" }, { status: 404 });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await readFile();
  const index = data.findIndex((p) => p.id === Number(params.id));

  if (index === -1) {
    return NextResponse.json({ msg: "Produto não encontrado" }, { status: 404 });
  }

  const updatedProduct: Produto = await request.json();
  data[index] = { ...data[index], ...updatedProduct };

  await writeFile(data);
  return NextResponse.json({ msg: "Produto atualizado com sucesso" });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const data = await readFile();
  const index = data.findIndex((p) => p.id === Number(params.id));

  if (index === -1) {
    return NextResponse.json({ msg: "Produto não encontrado" }, { status: 404 });
  }

  data.splice(index, 1);
  await writeFile(data);

  return NextResponse.json({ msg: "Produto apagado com sucesso" });
}
