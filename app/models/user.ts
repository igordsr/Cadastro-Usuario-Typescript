import { Printable } from "../interfaces/printable.js";
import { Address } from "./address.js";

export class User implements Printable{
    private _nome:string;
    private _dataNasc:Date;
    private _rg:string;
    private _endereco:Address;

    constructor(){
        this._endereco = new Address();
    }

    public get nome():string{
        return this._nome;
    }

    public set nome(value:string){
        this._nome = value;
    }

    public get dataNasc():Date{
        return this._dataNasc;
    }

    public set dataNasc(value:Date){
        this._dataNasc = value;
    }

    public get rg():string{
        return this._rg;
    }

    public set rg(value:string){
        this._rg = value;
    }

    public get endereco():Address{
        return this._endereco;
    }

    public set endereco(value:Address){
        this._endereco = value;
    }

    toString(): string {
        return `
            Nome: ${this._nome}
            Data de Nascimento: ${this.dataNasc}
            Rg: ${this._rg}
            Endereço*** ${this._endereco.toString()}
        `;
    }
}
