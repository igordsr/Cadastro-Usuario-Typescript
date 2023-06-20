import { Printable } from "../interfaces/printable.js";
import { ViaCep } from "../interfaces/via-cep.js";

export class Address implements Printable {
    private _cep: string;
    private _logradouro: string;
    private _numero: number;
    private _complemento: string;
    private _bairro: string;
    private _localidade: string;
    private _uf: string;

    constructor() {

    }

    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }

    public get logradouro(): string {
        return this._logradouro;
    }
    public set logradouro(value: string) {
        this._logradouro = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get complemento(): string {
        return this._complemento;
    }
    public set complemento(value: string) {
        this._complemento = value;
    }

    public get bairro(): string {
        return this._bairro;
    }
    public set bairro(value: string) {
        this._bairro = value;
    }

    public get localidade(): string {
        return this._localidade;
    }
    public set localidade(value: string) {
        this._localidade = value;
    }

    public get uf(): string {
        return this._uf;
    }
    public set uf(value: string) {
        this._uf = value;
    }

    public static async findAddressByZipCode(cep: string, inputLogradouro: HTMLInputElement, inputBairro: HTMLInputElement, inputLocalidade: HTMLInputElement, inputUF: HTMLInputElement): Promise<Address> {
        let response: any = null
        try {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then((dados: ViaCep) => {
                    const address = new Address();
                    inputLogradouro.value = dados.logradouro;
                    inputBairro.value = dados.bairro;
                    inputLocalidade.value = dados.localidade;
                    inputUF.value = dados.uf;
                    return address;
                })
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            }
            else {
                console.log('unexpected error: ', error);
            }
        }
        return response;
    }

    toString(): string {
        return `
            Cep : ${this._cep}
            Logradouro : ${this._logradouro}
            Numero : ${this._numero}
            Complemento : ${this._complemento}
            Bairro : ${this._bairro}
            Localidade : ${this._localidade}
            Uf : ${this._uf}
        `;
    }
}
