// src/app/types.ts
export interface Produto {
    id: number;
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
  
  export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  