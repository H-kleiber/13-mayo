// 1. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
// es divisible entre 2”.
// let numero=prompt("ingrese un numero");
//  const divisible =()=>{
//     if ((numero % 2) == 0) {
//        alert ("es divisible entre 2")
//     }else {
//         alert (" no es divisible entre 2")
//     }
//  }
// divisible();
// 2. Crear un programa que determine si un número introducido en un Prompt es par
// o no, la respuesta será mostrada en un Alert.
// let numeropar =prompt("ingrese un numero");
//  const par =()=>{
//     if ((numeropar % 2) == 0) {
//        alert (" es par")
//     }else {
//         alert ("no es par")
//     }
//  }
//   par();

// 3. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
// No considerar el caso en que ambos números son iguales.

// let numero1=prompt("ingrese un numero1");
// let numero2=prompt("ingrese un numero2");
// const menor =()=>{
//    if (numero1>numero2) {
//       alert ("elnumero 1 es mayor")
//    }else {
//        alert (" el numero 2 es mayor")
//    }
// }
// menor();

// 4. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número
// mayor. Considerar el caso en que 2 números sean iguales.


// let n1=prompt("ingrese un numero1");
// let n2=prompt("ingrese un numero2");
// let n3=prompt("ingrese un numero3");
// if (n1==n2 || n){  
//     if(n1>n3){
//         alert("el numero 3 es mayor " +n3)
//     }else
//     alert("el numero 1 y numero 2 son iguales"+n1 +n2)
// }if 
// const menores =()=>{
//     if (n1 > n2) {
//         if (n1 > n3) {
//             alert("El mayor es: " + n1);                                             
//         } else {
//             alert("el mayor es: " + n3);     
//         }
//     } else if (n2 > n3) {
//         alert("el mayor es: " + n2);
//     } else {
//         alert("el mayor es: " + n3);
//     }
// }
// menores();


// 5. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es
// lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o
// domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
//  let dia =prompt("ingrese un dia de la semana")
// switch (dia) {
//     case "lunes":
//       alert("estamos en el dia lunes")
//       break;
//     case "viernes":
//         alert("estamos en el dia viernes")
//       break;
//     case "sabado":
//         alert("estamos en el dia sabado")
//       break;
//     case "domingo":
//         alert("estamos en el dia domingo")
//       break;
//     default:
//      alert(" no se tiene guardado ese dia de la semana" )
//       break;
//   }


// 6. Crea un programa que pregunte al usuario un número. Mostrar los números que
// son múltiplos de 5 desde 1 hasta el número introducido por el usuario.


// function multiplos(){
//     let multiplos=prompt("ingrese un numero ");
//     for(i=1;i<=multiplos;i++){
//                if(( i % 5)==0){
//                 console.log(i);
//             }
//         }
//         }
// multiplos()

// 7. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
// mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
// solo al mostrar los números indicados por el usuario.
// function loteria(){

//     let loteriaNum1=prompt("ingrese un numero ganador 1 ");
//     let loteriaNum2=prompt("ingrese un numero ganador 2 ");
//     console.log(loteriaNum)
//     for(i=1;i<=50;i++){
//         if(i==loteriaNum1 || i==loteriaNum2){
//             console.log(`${i} " “¡Lotería!” "`)
//         }else( console.log(i))
//         }
//      }
//     loteria()


// 8. Crea un programa que solicite al usuario números, si lo que este introduce es un
// número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe
// ingresar el número 0. Finalmente mostrar la lista de números capturados en
// pantalla o en la consola.

// function ingresar(){
// let arreglo=[];

//  while (true){
// let dato=prompt("ingrese un numero") 
//     if (dato!=0){
//         arreglo.push(dato);
//         }else{ 
//         console.log("dato es igual a cero")
//         break;
//     }
//  } 
//  console.log(arreglo);
// }
// ingresar()


// 9. Crea un programa que solicite al usuario letras o palabras, si es así guardar el
// resultado. Para terminar de preguntar al usuario no debe escribir valor alguno. Al
// terminar de capturar, mostrar en pantalla la concatenación de todas las palabras
// capturadas.

// function ingresarLetras(){
//     let arreglo1=[];
    
//      while (true){
//     let datosletras=prompt("ingrese letra o palabras") 
//            if ( datosletras!='' ){
//                 arreglo1.push(datosletras);
//             }else{ 
//            console.log("ingreso vacio")
//             break;}
//      } 
//     console.log(arreglo1.join(''));
//     }
//     ingresarLetras()
 


// 10. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves,
// domingo, etc). El programa mostrará un mensaje personalizado para cada día de
// la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día.
// En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve
// a descansar” y terminar la captura de información


/*
let dia;

while(dia !=="Domingo"){
    dia = prompt("Ingresa los dias de la semana");
    if(dia == "lunes"){
       alert (" Lunes")
    } else if(dia == "martes"){
       alert(" martes") }
    else if(dia == "martes"){
       alert("" martes") }
    else if(dia == "miercoles"){
       alert(" Miercoles")}
    else if(dia == "jueves"){
       alert("Jueves")}
    else if(dia == "viernes"){
       alert("Viernes")}
    else if(dia == "sabado"){
        alert(" Sabado")}
    else {
        alert("Ve a descansar")
        }
                                                                                                                                    
    }


/*




// 11. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el
// número efectivamente esté en ese rango, si no lo está imprima un mensaje de
// error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
// está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

// 12. Escribe un programa que responda a un usuario que quiere comprar un helado en
// una conocida marca de comida rápida, cuánto le costará en función del topping
// que elija.
// • El helado sin topping cuesta 50 MXN.
// • El topping de oreo cuesta 10 MXN.
// • El topping de KitKat cuesta 15 MXN.
// • El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le
// indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
// precio del helado sin ningún topping.

// 13. Un conocido portal de educación en tecnología está ofreciendo programas para
// aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
// persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
// elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo
// mensual:
// • Course: $4999 MXN
// • Carrera $3999 MXN
// • Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
// correspondiente al precio final.
// • Beca Facebook: 20% de descuento.
// • Beca Google: 15% de descuento.
// • Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
// gastaría en total por el curso elegido, tomando en cuenta las siguientes
// duraciones:
// • Course: 2 meses
// • Carrera 6 meses
// • Master: 12 meses

// 14. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
// distancia recorrida por un vehículo con cargo extra por los litros consumidos,
// tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
// 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
// mayor la cantidad de litros consumidos se ha de añadir 10 al total.
// Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros
// consumidos.
