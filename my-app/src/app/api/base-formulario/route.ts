import { Produto } from "@/app/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

// Atualizando o caminho do arquivo para refletir a mudança de nome
const filePath = process.cwd() + '/src/app/data/base.json';

async function readFile() {
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file) as Produto[];
}

async function writeFile(data: Produto[]) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await readFile();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await readFile();
  const newEntry: Produto = await request.json();

  newEntry.id = Date.now(); // Adiciona um ID único
  data.push(newEntry);

  await writeFile(data);
  return NextResponse.json(newEntry);
}
