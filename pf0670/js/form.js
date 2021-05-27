
function validaCampoForm(){
    //RECUPERAR OS CAMPOS IMPUTS DO FORM
    //CRIANDO UM ARRAY/VETOR DE ELEMENTOS
    const inputs = document.querySelectorAll('input');

    //VARIÁVEL DE CONTROLE
    let controle = true;

    //ITERANDO O ARRAY DE ELEMENTOS
    for (elemento of inputs) {
        if(elemento.value == ''){
            elemento.style.border = '2px solid #ff0000';
            controle = false;
        }else{
            elemento.style.border = '1px solid #000000';
            //alert('ALTERADO');
        }
    }

    return controle;
}

//CONSTRUINDO UM OBJETO
//CONSTRUTORES
//CONSTRUTOR INICIALIZADO - É POSSÍVEL CRIAR INSTÂNCIAS DESSE TIPO DE OBJETO E UTILIZAR OS ATRIBUTOS DA CLASSE MAE.
function Carro(){
    this.modelo = 'fusca',
    this.ano = '1969',
    this.placa = 'ET-1070'
}
const carro = new Carro();
console.log('CONTEÚDO DO OBJETO PRINCIPAL - ' + carro.modelo);

//CONSTRUTOR FULL
function Pessoa(nome,profissao,cpf){
    this.nome = nome,
    this.profissao = profissao,
    this.cpf = cpf
}
const pessoa = new Pessoa('Jorge','Caminhoneiro',12345678900);
console.log('CONTEÚDO DO OBJETO PESSOA - NOME ' + pessoa.nome);
console.log('CONTEÚDO DO OBJETO PESSOA - PROFISSÃO ' + pessoa.profissao);
console.log('CONTEÚDO DO OBJETO PESSOA - CPF ' + pessoa.cpf);

//ARRAY DE OBJETOS
const pessoa1 = new Pessoa('Osvaldo','Churrasqueiro',6655433322);
const pessoa2 = new Pessoa('Elerton','Estivador',234485744);
const pessoa3 = new Pessoa('Martini','Barmem',237826732222);
//ATRIBUINDO
const pessoas = [pessoa1,pessoa2,pessoa3];
for(p in pessoas){
    console.log('CONTEÚDO DO OBJETO PESSOA'+ (parseInt(p)+1) + ' - '+ pessoas[p].nome);    
}

//ROTAÇÃO DE BANNER

function bannerAnimado1(){
    const elementoImg = document.getElementById('titImg');
    elementoImg.src = './img/banner-1.jpg';
    elementoImg.alt = 'Girassol brilhante!';
    setTimeout('bannerAnimado2()', 1000);
}

function bannerAnimado2(){
    const elementoImg = document.getElementById('titImg');
    elementoImg.src = './img/banner-2.jpg';
    elementoImg.alt = 'Girassol desbotado!';
    setTimeout('bannerAnimado3()', 1000);
}

function bannerAnimado3(){
    const elementoImg = document.getElementById('titImg');
    elementoImg.src = './img/banner-3.jpg';
    elementoImg.alt = 'Girassol despixelizado!';
    setTimeout('bannerAnimado1()', 900);
}

bannerAnimado1();