const perguntas = [
  {
    pergunta: 'Qual é a sigla do elemento "H"?',
    respostas: [
      "Hélio",
      "Hidrogênio",
      "Hélio-3",
      "Hafnium",
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a sigla do elemento "He"?',
    respostas: [
      "Hélio",
      "Hafnium",
      "Hidrogênio",
      "Hélio-3",
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a sigla do elemento "Li"?',
    respostas: [
      "Lantânio",
      "Lutécio",
      "Lítio",
      "antânio",
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a sigla do elemento "Be"?',
    respostas: [
      "Bário",
      "Berílio",
      "Boro",
      "Berkelium",
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a sigla do elemento "B"?',
    respostas: [
      "Bismuto",
      "Boro",
      "Berkelium",
      "Bohrínio",
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a sigla do elemento "C"?',
    respostas: [
      "Carbono",
      "Cromo",
      "Cobre",
      "Cloro",
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a sigla do elemento "N"?',
    respostas: [
      "Nitrogênio",
      "Neônio",
      "Nêutron",
      "Níquel",
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a sigla do elemento "O"?',
    respostas: [
      "Oganessônio",
      "Ósmio",
      "Ouro",
      "Oxigênio",
    ],
    correta: 3
  },
  {
    pergunta: 'Qual é a sigla do elemento "F"?',
    respostas: [
      "Ferro",
      "Flúor",
      "Fósforo",
      "Francium",
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a sigla do elemento "Ne"?',
    respostas: [
      "Néon",
      "Níquel",
      "Neônio",
      "Neptúnio",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))   
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
     //Repetição para mostrar respostas
  }

  quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
}

