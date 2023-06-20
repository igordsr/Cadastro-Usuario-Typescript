import { User } from "../models/user.js";
import { View } from "./view.js";

export class UserView extends View<User[]> {
    protected template(usuarios: Array<User>): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">RG</th>
                    </tr>
                </thead>
                <tbody>
                    ${usuarios.map((user,index) =>{
                        return `
                            <tr>
                                <th scope="row">${index + 1}</th>
                                <td>${user.nome}</td>
                                <td>${user.dataNasc}</td>
                                <td>${user.rg}</td>
                            </tr>
                        `;
                    }).join()}
                </tbody>
            </table>
        `;
    }
}
