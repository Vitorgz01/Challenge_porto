"use client";
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

// Definindo a interface para os dados do formulário
interface FormData {
    name: string;
    email: string;
}

export default function FormPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: ''
    });

    // Função para lidar com as mudanças nos inputs
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
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
  background-color: #f4f4f9;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 5px;
  
  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
