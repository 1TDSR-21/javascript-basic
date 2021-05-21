

/**
 1 - Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média
    aritmética desses números. Informe o resultado em um console.log.
let nr1 = parseInt(prompt("Digite o primeiro número!"));
let nr2 = parseInt(prompt("Digite o segundo número!"));
let nr3 = parseInt(prompt("Digite o terceiro número!"));
let resultado = ((nr1+nr2+nr3)/3);
console.log("O resultado da operação é : " + resultado);
 */

/**
  2 - Faça um programa JavaScript em que o usuário informará sua altura e peso e o programa calculará o seu IMC. Informe o resultado em um console.log. 
  let peso = parseInt(prompt("Digite o seu peso!"));
let altura = parseInt(prompt("Digite a sua altura!"));
//let resultado = (peso/(altura*altura));
let resultado = (peso/(altura**2));
console.log("O seu IMC é : " + resultado);
*/
/**
 3 - Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma  mensagem de alerta informando qual é o maior número dentre os números informados. Informe o resultado em um console.log. 
 let nr1 = parseInt(prompt("Digite o primeiro número!"));
let nr2 = parseInt(prompt("Digite o segundo número!"));
let nr3 = parseInt(prompt("Digite o terceiro número!"));

if((nr1 > nr2) && (nr1 > nr3)){
   console.log("O primeiro número é o maior!");   
}else if((nr2 > nr1) && (nr2 > nr3)){
   console.log("O segundo número é o maior!");   
}else{
   console.log("O terceiro número é o maior!");   
}

 */

/**\
 4 - Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem dizendo se o usuário e ou não menor de idade. Informe o resultado em um console.log.
  let idade = parseInt(prompt("Digite sua idade!"));
 //IF Ternário
 let resultado = idade >= 18 ? "Você é MAIOR de idade!" : "Você é MENOR de idade!";
 console.log(resultado);   
 
 */
