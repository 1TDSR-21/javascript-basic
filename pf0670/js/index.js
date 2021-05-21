

//CRIAÇÃO OBJETO
let pessoa = {
  nome: 'Ale',
  profissao: 'Professor',
  endereco: ['Rua.Tal','00000-000','São-Paulo'],
  cpf: '12345678900',
  validaCpf: function(cpfOut){
    //....
    if(cpfOut){
      this.cpf = cpfOut;
    }else{
      this.cpf = 0;
    }
  }
}

pessoa.validaCpf(12345);
console.log("Valor do atributo cpf : " + pessoa.cpf);
console.log("Valor do atributo endereço : " + pessoa.endereco[0]);



//Comentário de linha
    /*
//MATRIZ SIMPLES
let matriz = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matriz[0][1]);

// VETORES / ARRAYS
let frutas = ['maçã','banana','laranja'];
console.log("Item do Array - " + frutas[2]);
frutas.unshift('morango');
frutas.push('caqui');
console.table("MEU ARRAY " + frutas);

//LOOP FOR TRADICIONAL
console.log("LOOP-FOR");
for(let x = 0; x < frutas.length ; x++){
  console.log("FRUTA"+x+ " - " +frutas[x]);
}

//FOR-OF[Retorna o conteúdo do Array na variavel]
console.log("LOOP-FOR-OF");
for(f of frutas){
  console.log("FRUTA - " + f);
}

//FOR-IN[Retorna o índice do Array na variavel]
console.log("LOOP-FOR-IN");
for(f in frutas){
  console.log("FRUTA - " + frutas[f]);
}

        Comentário de Bloco
      
  
      //Declaração de variáveis
      var nr1 = 0;
      var nome = "Samuka";
      nr1 = nome;
  
      //Funçao interna console, podemos escreve no console do borwser com ela.
      console.log("Valor da variável : " + nr1);
      var y = 1;
      var x = y, y = 0;
  
      console.log("Valor da variável x: " + x);
 
      var exemplo1;
      console.log("Valor de exemplo1 : " + exemplo1);
      let exemplo2;
      console.log("Valor de exemplo2 : " + exemplo2);
      const exemplo3 = "";
      console.log("Valor de exemplo3 : " + exemplo3);
  
  
      //HOISTING
      nome = "TESTE"
      var nome;
  
  
      const cabecalho = document.querySelector('#cabecalho');
      cabecalho.textContent = 'Olá Mundo!';
  
      //Atrelando um evento de click no elemento cabeçalho.
      cabecalho.addEventListener('click', escreve);
  
      function escreve() {
        var texto = prompt('Digite um novo texto para o título');
        cabecalho.textContent = texto;
      }
      */