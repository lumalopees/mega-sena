// funções 

const createHeader = () => {
  const getHeader = document.getElementsByTagName('header')[0];
  const createTitle = document.createElement('h1')
  createTitle.innerText = 'Boas vindas - bora jogar na mega?'
  const createSubtext = document.createElement('h3')
  createSubtext.innerText = 'Números Sorteados'
  getHeader.appendChild(createTitle);
  getHeader.appendChild(createSubtext);
}

const RandomLuck = () => {
  const mainTag = document.getElementsByTagName('main')[0]
  const containerCircle = document.createElement('div');
  containerCircle.className = 'numeros-container';
  mainTag.appendChild(containerCircle);
}

const RandomNumbers = () => {
  return Math.ceil(Math.random() * (100 - 1) + 1);
 
}

const LuckyNumbers = (quantidade) => {
  const container = document.querySelector('.numeros-container');
  
  for (let index = 0; index < quantidade; index +=1) {
     const numbers = document.createElement('div');
     numbers.className = 'numero'; 
     numbers.innerText = RandomNumbers();
     container.appendChild(numbers);
  }
 }
 
 // chamada 
 
 createHeader();
 RandomLuck();
 LuckyNumbers(6);