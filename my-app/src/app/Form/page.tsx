"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

// Definindo a interface para os dados do formulário
interface FormData {
  name: string;
  email: string;
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
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
    alert(`Nome: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <FormContainer>
      <Title>Formulário de Contato</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </FormContainer>
  );
}

// Estilos usando styled-components

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-bottom: 5px;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 15px;
  margin-top: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 112, 243, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #cc0000;
    transform: scale(1.02);
  }

  &:active {
    background-color: #b20000;
  }
`;
