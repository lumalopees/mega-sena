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

const LuckyNumbers = () => {
  const container = document.querySelector('.numeros-container');
  
  for (let index = 0; index < 6; index +=1) {
     const numbers = document.createElement('div');
     numbers.className = 'numero'; // Remova o ponto aqui
     container.appendChild(numbers);
  }
 }
 
 // chamada de funções
 
 createHeader();
 RandomLuck();
 LuckyNumbers();