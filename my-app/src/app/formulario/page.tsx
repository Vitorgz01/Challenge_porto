"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaFileInvoice, FaTrashAlt } from "react-icons/fa";

const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #cc0000;
  margin-bottom: 24px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${(props) => (props.active ? "#cc0000" : "#ccc")};
  color: ${(props) => (props.active ? "#ffffff" : "#333")};
  box-shadow: ${(props) =>
    props.active ? "0px 4px 8px rgba(0,0,0,0.2)" : "none"};
  &:hover {
    background-color: ${(props) => (props.active ? "#ff0000" : "#bbb")};
  }
`;

const Section = styled.section`
  width: 66%;
  margin: 0 auto;
`;

const Form = styled.form`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #cc0000;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ActionButton = styled.button<{ deleteButton?: boolean }>`
  color: ${(props) => (props.deleteButton ? "#cc0000" : "#0070f3")};
  &:hover {
    color: ${(props) => (props.deleteButton ? "#ff0000" : "#005bb5")};
  }
`;

export default function GerenciamentoProdutos() {
  const navigate = useRouter();

  const [tab, setTab] = useState<"lista" | "cadastro">("lista");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cabecalho = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    };
    try {
      const response = await fetch("/api/base-formulario", cabecalho);
      if (response.ok) {
        alert(`Pessoa cadastrada com sucesso!`);
        setProduto({
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
        setTab("lista");
        await fetchLista();
      } else {
        alert("Erro ao cadastrar!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o produto", error);
    }
  };

  const [lista, setLista] = useState([]);
  const fetchLista = async () => {
    try {
      const response = await fetch("/api/base-formulario");
      const data = await response.json();
      setLista(data);
    } catch (error) {
      console.error("Erro ao carregar produtos", error);
    }
  };

  useEffect(() => {
    fetchLista();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/base-formulario/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await fetchLista();
      } else {
        alert("Erro ao deletar o produto");
      }
    } catch (error) {
      console.error("Falha ao apagar registro.", error);
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
      <Title>Formulário</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <TabButton active={tab === "lista"} onClick={() => setTab("lista")}>
          Lista de Formulários
        </TabButton>
        <TabButton
          active={tab === "cadastro"}
          onClick={() => setTab("cadastro")}
        >
          Cadastro Pessoa
        </TabButton>
      </div>

      {tab === "lista" ? (
        <Section>
          {lista.map((p: any) => (
            <Form key={p.id}>
              <FieldContainer>
                <Label>ID:</Label>
                <Input type="text" value={p.id} readOnly />
              </FieldContainer>
              <SectionTitle>Registro de Pessoa</SectionTitle>
              {["name", "fatherName", "motherName", "rg", "cpf"].map((key) => (
                <FieldContainer key={key}>
                  <Label>{fieldLabels[key] || key}:</Label>
                  <Input type="text" value={p[key]} readOnly />
                </FieldContainer>
              ))}
              <SectionTitle>Registro de Carro</SectionTitle>
              {[
                "marca",
                "modelo",
                "ano",
                "placa",
                "anoUltimaManutencao",
                "vin",
              ].map((key) => (
                <FieldContainer key={key}>
                  <Label>{fieldLabels[key] || key}:</Label>
                  <Input type="text" value={p[key]} readOnly />
                </FieldContainer>
              ))}
              <SectionTitle>Registro de Mecânico</SectionTitle>
              {["mecanicoNome", "especialidade", "anoInicioAtividade"].map(
                (key) => (
                  <FieldContainer key={key}>
                    <Label>{fieldLabels[key] || key}:</Label>
                    <Input type="text" value={p[key]} readOnly />
                  </FieldContainer>
                )
              )}
              <ActionContainer>
                <Link href={`/formulario/detalhes/${p.id}`} passHref>
                  <ActionButton>
                    <FaFileInvoice />
                  </ActionButton>
                </Link>
                <ActionButton deleteButton onClick={() => handleDelete(p.id)}>
                  <FaTrashAlt />
                </ActionButton>
              </ActionContainer>
            </Form>
          ))}
        </Section>
      ) : (
        <Section>
          <SectionTitle>Cadastrar Novo Formulário</SectionTitle>
          <Form onSubmit={handleSubmit}>
            <SectionTitle>Registro de Pessoa</SectionTitle>
            {["name", "fatherName", "motherName", "rg", "cpf"].map((key) => (
              <FieldContainer key={key}>
                <Label htmlFor={key}>{fieldLabels[key] || key}:</Label>
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
            {[
              "marca",
              "modelo",
              "ano",
              "placa",
              "anoUltimaManutencao",
              "vin",
            ].map((key) => (
              <FieldContainer key={key}>
                <Label htmlFor={key}>{fieldLabels[key] || key}:</Label>
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
            <SectionTitle>Registro de Mecânico</SectionTitle>
            {["mecanicoNome", "especialidade", "anoInicioAtividade"].map(
              (key) => (
                <FieldContainer key={key}>
                  <Label htmlFor={key}>{fieldLabels[key] || key}:</Label>
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
            <ActionButton
              as="button"
              type="submit"
              deleteButton={false}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "16px",
                backgroundColor: "#cc0000",
                color: "#fff",
              }}
            >
              Cadastrar Pessoa
            </ActionButton>
          </Form>
        </Section>
      )}
    </Main>
  );
}
