// criar elemento para o header 
// onde eu quero criar ele? no header

const getHeader = document.getElementsByTagName('header')[0];
const createTitle = document.createElement('h1')
createTitle.innerText = 'Boas vindas - bora jogar na mega?'
const createSubtext = document.createElement('h3')
createSubtext.innerText = 'Números Sorteados'

getHeader.appendChild(createTitle);
getHeader.appendChild(createSubtext);