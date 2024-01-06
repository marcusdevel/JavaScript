

//-------------------Teste---------------------------------------------

function teste(){
    console.log('exemplo');
}

teste();
teste();
teste();

//--------------------My Name-------------------------------------------


 function sayMyName(name){
     console.log('My name is: ' + name);
 }

 sayMyName('Marcus');

//---------------------QUADRADO DO VALOR---------------------------------

function quadrado(valor){
     return valor * valor;
}

 const quadradoDeDez = quadrado(5);
     console.log(quadradoDeDez);


//======================INCREMENTO DE JUROS-------------------------------


function IncrementarJuros(valor, juros){
     const valordeAcrescimo = (juros / 100) * valor;
     return valor + valordeAcrescimo;

   
}

 console.log(IncrementarJuros(100,15));
 console.log(IncrementarJuros(100,10));





//---------------VALOR FINAL DE UMA ROUPA---------------------------------

//----- 1º FUNÇÃO-----
 function AdicionarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)))
};

//----- 2º FUNÇÃO-----
function AplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)))
};

//----VARIÁVEIS
const PrecoDaRoupa = 100;
const CodigoDePagamento = 3;


//------CONDICIONAL---------
if (CodigoDePagamento === 1){
    console.log(AdicionarDesconto(PrecoDaRoupa, 10))
} else if(CodigoDePagamento === 2){
    console.log(AdicionarDesconto(PrecoDaRoupa, 15))
} else if(CodigoDePagamento ===3){
    console.log(PrecoDaRoupa)
} else{
    console.log(AplicarJuros(PrecoDaRoupa, 10))
};