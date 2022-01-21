console.clear()
const prompt = require('prompt-sync')();

let conta = 0;

let historia = +prompt(`Após alguns meses no espaço você finalmente chegou em Marte, você está pronto para missão?
Hora de pisar na terra vermelha, algo que poucos humanos fizeram... sinta-se orgulhoso de estar aqui.
Ao descer da nave siga as bandeiras até chegar no posto de trabalho... lá tera mais instruções.
Aperte o botão azul para entrar no posto de trabalho e boa sorte... Aperte Enter `);

console.log();

let pergunta1 = prompt('Seus cilidros de ar estão ok? ').toLowerCase()

if (pergunta1 == 'sim'){
  console.log('Muito bem!!!');
  conta = conta + 1
} else {
  console.log('Okay vamos para a proxima pergunta...');
}

let pergunta2 = prompt('Seu kit de ferramenta é o ideal para missão? ').toLowerCase()

if (pergunta2 == 'sim'){
  console.log('Muito bem!!!');
  conta = conta + 1
} else {
  console.log('Okay vamos para a proxima pergunta...');
}

let pergunta3 = prompt('Chegou ao posto de trabalho? ').toLowerCase()

if (pergunta3 == 'sim'){
  console.log('Muito bem!!!');
  conta = conta + 1
} else {
  console.log('Okay vamos para a proxima pergunta...');
}

let pergunta4 = prompt('Configurou as estações de radio e satelite? ').toLowerCase()

if (pergunta4 == 'sim'){
  console.log('Muito bem!!!');
  conta = conta + 1
} else {
  console.log('Okay vamos para a proxima pergunta...');
}

let pergunta5 = prompt('Você configurou as antenas? ').toLowerCase()

if (pergunta5 == 'sim'){
  console.log('Muito bem!!!');
  conta = conta + 1
} else {
  console.log('Okay vamos para a proxima pergunta...');
}

if (conta == 0){
    console.log('Você falhou miseravelmente');
}
else
{
    if (conta == 1){
        console.log('Você falhou, mas ainda consegue fugir da situação.');
    }
    if (conta == 2){
        console.log('Você falhou, mas ainda consegue fugir da situação.')
    } 
    if (conta == 3){
        console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
    }
    if (conta == 4){
        console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
    }
    if (conta == 5){
        console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
    }
}