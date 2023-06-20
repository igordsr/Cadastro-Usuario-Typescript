export function logInto(target:any, propertyKey:string, propertyDescriptor:PropertyDescriptor) {
    const func = propertyDescriptor.value;
    propertyDescriptor.value = function(...args:any[]) {
        const startTime:number = performance.now();
        const returnValue: any = func.apply(this, args);
        const endTime:number = performance.now();
        console.log(`Método ${propertyKey}
        Parâmetros: ${JSON.stringify(args)}
        Returno: ${JSON.stringify(returnValue, null, 1)}
        Tempo de execução ${(endTime - startTime) / 1} milesegundos`);
        return returnValue;
    }
    return propertyDescriptor;
}