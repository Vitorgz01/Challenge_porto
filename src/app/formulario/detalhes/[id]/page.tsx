"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #cc0000;
  margin-bottom: 24px;
`;

const Form = styled.form`
  width: 33%;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #cc0000;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  background-color: #eee;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: #cc0000;
  color: #ffffff;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 16px;
  width: 100%;
  &:hover {
    background-color: #ff0000;
  }
`;

export default function Produto({ params }: { params: { id: string } }) {
  const navigate = useRouter();
  const [produto, setProduto] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    rg: "",
    cpf: "",
    cnhNumber: "",
    cnhCategory: "",
    renachNumber: "",
    nomeCondutor: "",
    marca: "",
    modelo: "",
    ano: "",
    placa: "",
    anoUltimaManutencao: "",
    vin: "",
    mecanicoNome: "",
    especialidade: "",
    anoInicioAtividade: "",
  });
  const id = params.id;

  useEffect(() => {
    const fetchProduto = async () => {
      const response = await fetch(`/api/base-formulario/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduto(data);
      } else {
        console.error("Erro ao carregar o produto:", response.statusText);
      }
    };
    fetchProduto();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cabecalho = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    };
    try {
      const response = await fetch(`/api/base-formulario/${id}`, cabecalho);
      if (response.ok) {
        alert("Produto atualizado com sucesso!");
        navigate.push("/formulario");
      } else {
        alert("Erro ao atualizar produto!");
      }
    } catch (error) {
      console.error("Erro ao atualizar o produto", error);
    }
  };

  const fieldLabels: { [key: string]: string } = {
    name: "Nome",
    fatherName: "Nome do Pai",
    motherName: "Nome da Mãe",
    rg: "RG",
    cpf: "CPF",
    cnhNumber: "Número da CNH",
    cnhCategory: "Categoria da CNH",
    renachNumber: "Número RENACH",
    nomeCondutor: "Nome do Condutor",
    marca: "Marca",
    modelo: "Modelo",
    ano: "Ano",
    placa: "Placa",
    anoUltimaManutencao: "Ano da Última Manutenção",
    vin: "VIN",
    mecanicoNome: "Nome do Mecânico",
    especialidade: "Especialidade",
    anoInicioAtividade: "Ano de Início das Atividades",
  };

  return (
    <Main>
      <Title>Editar Produto</Title>
      <Form onSubmit={handleSubmit}>
        <SectionTitle>Registro de Pessoa</SectionTitle>
        {["name", "fatherName", "motherName", "rg", "cpf"].map((key) => (
          <FieldContainer key={key}>
            <Label htmlFor={key}>{fieldLabels[key] || key}</Label>
            <Input
              type="text"
              name={key}
              value={produto[key as keyof typeof produto]}
              id={key}
              onChange={handleChange}
              required
            />
          </FieldContainer>
        ))}

        <SectionTitle>Registro de Carro</SectionTitle>
        {["marca", "modelo", "ano", "placa", "anoUltimaManutencao", "vin"].map(
          (key) => (
            <FieldContainer key={key}>
              <Label htmlFor={key}>{fieldLabels[key] || key}</Label>
              <Input
                type="text"
                name={key}
                value={produto[key as keyof typeof produto]}
                id={key}
                onChange={handleChange}
                required
              />
            </FieldContainer>
          )
        )}

        <SectionTitle>Registro de Mecânico</SectionTitle>
        {["mecanicoNome", "especialidade", "anoInicioAtividade"].map((key) => (
          <FieldContainer key={key}>
            <Label htmlFor={key}>{fieldLabels[key] || key}</Label>
            <Input
              type="text"
              name={key}
              value={produto[key as keyof typeof produto]}
              id={key}
              onChange={handleChange}
              required
            />
          </FieldContainer>
        ))}

        <SubmitButton type="submit">Salvar Alterações</SubmitButton>
      </Form>
    </Main>
  );
}
