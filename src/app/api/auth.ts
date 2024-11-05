import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/app/data/users.json');

function readUsers() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeUsers(users: any) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action, name, email, password } = req.body;

  if (req.method === 'POST') {
    if (action === 'signup') {
      const users = readUsers();
      const existingUser = users.find((user: any) => user.email === email);
      
      if (existingUser) {
        return res.status(400).json({ message: 'Usuário já registrado' });
      }
      
      users.push({ name, email, password });
      writeUsers(users);
      return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    }

    if (action === 'signin') {
      const users = readUsers();
      const user = users.find((user: any) => user.email === email && user.password === password);

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      return res.status(200).json({ message: 'Login realizado com sucesso!' });
    }

    return res.status(400).json({ message: 'Ação inválida' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
