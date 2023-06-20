export abstract class View<T>{
    protected _element: HTMLElement;

    constructor(seletor:string){
        this._element = document.querySelector(seletor) as HTMLElement;
    }

    protected abstract template(model:T):string;

    public update(model:T) {
        const template :string = this.template(model);
        this._element.innerHTML = template;
    }
}