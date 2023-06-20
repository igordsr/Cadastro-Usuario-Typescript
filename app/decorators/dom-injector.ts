export function domInjector(selector:string){
    return function(target:any, propertyKey:string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function() {
            return document.querySelector(selector) as HTMLElement;
        }
        Object.defineProperty(target, propertyKey, {get :getter })
    }
}