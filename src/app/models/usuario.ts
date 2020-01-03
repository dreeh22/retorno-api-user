

export interface Endereco {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Empresa {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface DadosUsuario {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Endereco;
    phone: string;
    website: string;
    company: Empresa;
}
