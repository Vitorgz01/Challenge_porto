"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

// Definindo a interface para os dados do formulário
interface FormData {
  name: string;
  fatherName: string;
  motherName: string;
  rg: string;
  cpf: string;
  cnhNumber: string;
  cnhCategory: string;
  renachNumber: string;
  nomeCondutor: string;
  marca: string;
  modelo: string;
  ano: string;
  placa: string;
  anoUltimaManutencao: string;
  vin: string;
  mecanicoNome: string;
  especialidade: string;
  anoInicioAtividade: string;
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
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

  // Função para lidar com as mudanças nos inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Formulário Enviado: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <FormContainer>
      <Title>Formulário Completo de Registro</Title>
      <Form onSubmit={handleSubmit}>
        {/* Seção de Condutor */}
        <SectionTitle>Registro de Condutor</SectionTitle>
        <Label>Nome:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Label>Nome do Pai:</Label>
        <Input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputChange}
          required
        />

        <Label>Nome da Mãe:</Label>
        <Input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleInputChange}
          required
        />

        <Label>RG:</Label>
        <Input
          type="text"
          name="rg"
          value={formData.rg}
          onChange={handleInputChange}
          required
        />

        <Label>CPF:</Label>
        <Input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          required
        />

        <Label>Número da CNH:</Label>
        <Input
          type="text"
          name="cnhNumber"
          value={formData.cnhNumber}
          onChange={handleInputChange}
          required
        />

        <Label>Categoria da CNH:</Label>
        <Input
          type="text"
          name="cnhCategory"
          value={formData.cnhCategory}
          onChange={handleInputChange}
          required
        />

        <Label>Número RENACH:</Label>
        <Input
          type="text"
          name="renachNumber"
          value={formData.renachNumber}
          onChange={handleInputChange}
          required
        />

        {/* Seção de Carro */}
        <SectionTitle>Registro de Carro</SectionTitle>
        <Label>Nome do Condutor:</Label>
        <Input
          type="text"
          name="nomeCondutor"
          value={formData.nomeCondutor}
          onChange={handleInputChange}
          required
        />

        <Label>Marca:</Label>
        <Input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
          required
        />

        <Label>Modelo:</Label>
        <Input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleInputChange}
          required
        />

        <Label>Ano:</Label>
        <Input
          type="text"
          name="ano"
          value={formData.ano}
          onChange={handleInputChange}
          required
        />

        <Label>Placa:</Label>
        <Input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleInputChange}
          required
        />

        <Label>Ano da Última Manutenção:</Label>
        <Input
          type="text"
          name="anoUltimaManutencao"
          value={formData.anoUltimaManutencao}
          onChange={handleInputChange}
          required
        />

        <Label>VIN:</Label>
        <Input
          type="text"
          name="vin"
          value={formData.vin}
          onChange={handleInputChange}
          required
        />

        {/* Seção de Mecânico */}
        <SectionTitle>Registro de Mecânico</SectionTitle>
        <Label>Nome do Mecânico:</Label>
        <Input
          type="text"
          name="mecanicoNome"
          value={formData.mecanicoNome}
          onChange={handleInputChange}
          required
        />

        <Label>Especialidade:</Label>
        <Input
          type="text"
          name="especialidade"
          value={formData.especialidade}
          onChange={handleInputChange}
          required
        />

        <Label>Ano de Início das Atividades:</Label>
        <Input
          type="text"
          name="anoInicioAtividade"
          value={formData.anoInicioAtividade}
          onChange={handleInputChange}
          required
        />

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </FormContainer>
  );
}

// Estilos usando grid layout para o formulário
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f9;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #333;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  grid-column: span 2;
  color: #0070f3;
  font-size: 20px;
  margin-top: 30px;
  font-weight: 600;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  max-width: 600px;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 112, 243, 0.2);
  }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 12px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;
