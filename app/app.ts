import { UserController } from './controllers/user-controller.js';

const form = document.getElementById("form");
const input: HTMLInputElement = document.getElementById("cep") as HTMLInputElement;

const userController:UserController = new UserController();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


if(input){
    input.addEventListener('blur', (event)=>{
        userController.findAddressByZipCode()
    });
}


if(form){
    form.addEventListener("submit", (event)=>{
        userController.addNewUser();
        event.preventDefault();
    });
}
