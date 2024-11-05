export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Simulando dados de usuário em JSON
    const mockUser = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456", // Senha simulada
    };

    // Validando as credenciais
    if (email === mockUser.email && password === mockUser.password) {
      res.status(200).json({ message: "Login bem-sucedido!", user: mockUser });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
