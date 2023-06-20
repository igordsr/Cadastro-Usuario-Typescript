import { domInjector } from '../decorators/dom-injector.js';
import { logInto } from '../decorators/log-into.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Address } from '../models/address.js';
import { User } from '../models/user.js';
import { Print } from '../utils/print.js';
import { MessageView } from '../view/message-view.js';
import { UserView } from '../view/user-view.js';

export class UserController {
    @domInjector('#nome')
    private _inputNome: HTMLInputElement;
    @domInjector('#dataNascimento')
    private _inputDataNasc: HTMLInputElement;
    @domInjector('#rg')
    private _inputRg: HTMLInputElement;
    @domInjector('#cep')
    private _inputCep: HTMLInputElement;
    @domInjector('#logradouro')
    private _inputLogradouro: HTMLInputElement;
    @domInjector('#numero')
    private _inputNumero: HTMLInputElement;
    @domInjector('#complemento')
    private _inputComplemento: HTMLInputElement;
    @domInjector('#bairro')
    private _inputBairro: HTMLInputElement ;
    @domInjector('#localidade')
    private _inputLocalidade: HTMLInputElement;
    @domInjector('#uf')
    private _inputUF: HTMLInputElement ;
    private _usuarios: Array<User>;
    private _userView: UserView;
    private _mensagemView: MessageView;

    constructor() {
        this._usuarios = [];
        this._userView = new UserView("#userTable");
        this._mensagemView = new MessageView("#mensagemView");
    }

    public addNewUser(): void {
        const user: User = this.mapToNewUser();
        Print(user);
        if (!this.ehDiaUtil(user.dataNasc)) {
            this._mensagemView.update("Não é possivel cadastrar usuários que nasceram aos finais de semana");
            return;
        }
        this._usuarios.push(user);
        this.limpaFormulario();
        this._userView.update(this._usuarios);
        this._mensagemView.update("Usuário Incluido com Sucesso!")
    }

    @logInto
    public findAddressByZipCode():void {
        Address.findAddressByZipCode(this._inputCep.value, this._inputLogradouro, this._inputBairro, this._inputLocalidade, this._inputUF);
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    @logInto
    private mapToNewUser(): User {
        const exp = "/-/9";
        const user: User = new User();
        user.nome = this._inputNome.value.toString();
        user.dataNasc = new Date(this._inputDataNasc.value.replace(exp, ','));
        user.rg = this._inputRg.value.toString();
        user.endereco.cep = this._inputCep.value.toString();
        user.endereco.logradouro = this._inputLogradouro.value.toString();
        user.endereco.numero = + this._inputNumero.value.toString();
        user.endereco.complemento = this._inputComplemento.value.toString();
        user.endereco.bairro = this._inputBairro.value.toString();
        user.endereco.localidade = this._inputLocalidade.value.toString();
        user.endereco.uf = this._inputUF.value.toString();
        return user;
    }

    private limpaFormulario(): void {
        this._inputNome.value = '';
        this._inputDataNasc.value = '';
        this._inputRg.value = '';
        this._inputCep.value = '';
        this._inputCep.value = '';
        this._inputLogradouro.value = '';
        this._inputNumero.value = '';
        this._inputComplemento.value
        this._inputBairro.value = '';
        this._inputLocalidade.value = '';
        this._inputUF.value = '';
        this._inputNome.focus()
    }
}
