let iKnowJs: boolean = true

if(iKnowJs){
    console.log("Perfect");
}else{
    console.log("Bad");
}

let number1: number | null | undefined = 29 //se puede poner varios tipos de datos, por si consumimos un backend, para recibir distintos tipos de datos en una variable
let number2: number = 35
let number3: number = 6
let bonus: boolean = true
let palabras: string = "probando typescript"
//declarar el tipo de dato a las variables, hace que el ide reconozco y pueda aconsejarte los metodos de ese tipo de dato
// por ejemplo palabras.


function mayor(num1:number, num2:number, comodin: boolean):void{
    if(comodin){
        num1 += number3
    }
    if(num1>num2){
        console.log(`${num1} es mayor`);
    }else if(num2>num1){
        console.log(`${num2} es mayor`);
    }else{
        console.log("son iguales");
    }
}

mayor(number1, number2, bonus)


//ANY, significa cualquier tipo de dato, en lo posible evitar usarlo es la buena practica
// ↓ ↓ ↓ ↓

let texto //al pasar el mouse por arriba nos saldra ANY, porque infiere que puede ser cualquier tipo de dato
// let texto: any
//se usa para saltar las validaciones de typescript pero se recomienda no usarlo. es una salida de paso

texto = "escribiendo un texto"
console.log(texto); // poniendo disney. typescript infiere que un string y te recomiendo los metodos de string

texto = 25
console.log(texto); // ahora recomendaria metodos de number

texto = true
console.log(texto);



