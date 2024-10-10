// src/app/servicos/page.tsx
import Image from 'next/image';
import styled from 'styled-components';

// Imagens na pasta public
import relogio from '/public/icon-24-horas-90.png';
import chaveiro from '/public/icon-aluguel-de-carro-90.png';
import pneufu from '/public/icon-pneu-90.png';
import sercarro from '/public/icon-serviço-de-carro-90.png';

const Main = styled.main`
  padding: 2rem;
  background-color: #f1f1f1;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ServiceSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  gap: 1.5rem;
`;

const ServiceImage = styled(Image)`
  border-radius: 8px;
  width: 90px;
  height: 90px;
`;

const ServiceText = styled.div`
  text-align: left;
`;

const ServiceTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export default function Servicos() {
    return (
        <Main>
            <SectionTitle>Nossos serviços</SectionTitle>
            <ServiceWrapper>
                <ServiceSection>
                    <ServiceImage src={relogio} alt="imagem de um relógio com o número 24 no meio" />
                    <ServiceText>
                        <ServiceTitle>Atendimento 24 Horas:</ServiceTitle>
                        <ServiceDescription>
                            Serviço de assistência disponível 24 horas por dia, 7 dias por semana, para ajudar os clientes em situações de emergência.
                        </ServiceDescription>
                    </ServiceText>
                </ServiceSection>

                <ServiceSection>
                    <ServiceImage src={sercarro} alt="imagem de um carro e uma ferramenta" />
                    <ServiceText>
                        <ServiceTitle>Guincho:</ServiceTitle>
                        <ServiceDescription>
                            Serviço de guincho para transporte do veículo em caso de pane ou acidente, garantindo que o veículo seja levado a um local seguro ou a uma oficina autorizada.
                        </ServiceDescription>
                    </ServiceText>
                </ServiceSection>

                <ServiceSection>
                    <ServiceImage src={pneufu} alt="imagem de um pneu furado" />
                    <ServiceText>
                        <ServiceTitle>Troca de Pneus:</ServiceTitle>
                        <ServiceDescription>
                            Serviço de troca de pneus em caso de pneu furado ou danificado, proporcionando maior segurança ao cliente e seu veículo.
                        </ServiceDescription>
                    </ServiceText>
                </ServiceSection>

                <ServiceSection>
                    <ServiceImage src={chaveiro} alt="imagem de um carro e uma chave em cima dele" />
                    <ServiceText>
                        <ServiceTitle>Chaveiro:</ServiceTitle>
                        <ServiceDescription>
                            Assistência para abertura do veículo em caso de perda, roubo ou travamento das chaves, além da confecção de chaves reservas.
                        </ServiceDescription>
                    </ServiceText>
                </ServiceSection>
            </ServiceWrapper>
        </Main>
    );
}
