

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
