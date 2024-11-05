"use client";
import Image from "next/image";
import styled from "styled-components";
import vitor from "../public/images/assets/fotovitor.png";
import gabriel from "../public/images/assets/gabriel-177x250.jpeg";
import victor from "../public/images/assets/victor.jpg";

const Main = styled.main`
  padding: 2rem;
  background-color: #f1f1f1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Member = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 500px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled(Image)`
  border-radius: 8px;
`;

const MemberInfo = styled.div`
  text-align: left;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

const GithubLink = styled.a`
  color: #0066cc;
  text-decoration: underline;

  &:hover {
    color: #004c99;
  }
`;

const RepositoryLinkContainer = styled.div`
  margin-top: 2rem;
`;

const RepositoryLinkText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

export default function Integrantes() {
  return (
    <Main>
      <Title>Integrantes:</Title>

      <MembersContainer>
        <Member key="vitor">
          <MemberImage src={vitor} alt="Foto do Vitor" width={90} height={90} />
          <MemberInfo>
            <InfoText>Nome: Vitor de Oliveira Ginza</InfoText>
            <InfoText>RM: 554849</InfoText>
            <InfoText>Turma: 1TDSPL - 2024</InfoText>
            <InfoText>
              Github:{" "}
              <GithubLink
                href="https://github.com/Vitorgz01"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Vitorgz01
              </GithubLink>
            </InfoText>
          </MemberInfo>
        </Member>

        <Member key="victor">
          <MemberImage
            src={victor}
            alt="Foto do Victor"
            width={90}
            height={90}
          />
          <MemberInfo>
            <InfoText>Nome: Victor Hugo Carvalho Pereira</InfoText>
            <InfoText>RM: 558550</InfoText>
            <InfoText>Turma: 1TDSPL - 2024</InfoText>
            <InfoText>
              Github:{" "}
              <GithubLink
                href="https://github.com/VictorHugo55"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/VictorHugo55
              </GithubLink>
            </InfoText>
          </MemberInfo>
        </Member>

        <Member key="gabriel">
          <MemberImage
            src={gabriel}
            alt="Foto do Gabriel"
            width={90}
            height={90}
          />
          <MemberInfo>
            <InfoText>Nome: Gabriel Gomes</InfoText>
            <InfoText>RM: 555427</InfoText>
            <InfoText>Turma: 1TDSPL - 2024</InfoText>
            <InfoText>
              Github:{" "}
              <GithubLink
                href="https://github.com/GomesMancera"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/GomesMancera
              </GithubLink>
            </InfoText>
          </MemberInfo>
        </Member>
      </MembersContainer>

      <RepositoryLinkContainer>
        <RepositoryLinkText>Link do Repositório:</RepositoryLinkText>
        <GithubLink
          href="https://github.com/Vitorgz01/Challenge_porto"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Vitorgz01/Challenge_porto
        </GithubLink>
      </RepositoryLinkContainer>
    </Main>
  );
}
