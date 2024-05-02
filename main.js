const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const biscuitClick = document.querySelector(".biscuitClosed");
const btnReturn = document.querySelector("#btnNew");
const numeros = numberRandom();
const phrasesBiscuit = [
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
  "Acredite no seu potencial e siga em frente.",
  "Grandes oportunidades surgirão se você persistir.",
  "Aprenda com seus erros e cresça com eles.",
  "O sucesso está na jornada, não apenas no destino.",
  "Seja gentil consigo mesmo e com os outros.",
  "A paciência é uma virtude valiosa.",
  "Pequenas ações podem ter grandes impactos.",
  "O conhecimento é a chave para abrir portas.",
  "Seja grato pelo que você tem.",
  "A criatividade está dentro de você, deixe-a brilhar.",
  "Mantenha-se positivo, mesmo diante dos desafios.",
  "A vida é uma aventura, aproveite cada momento.",
  "Seja corajoso o suficiente para seguir seus sonhos.",
  "O amor é a linguagem universal.",
  "Confie no processo da vida.",
  "A mudança é inevitável, abrace-a.",
  "Sua determinação pode mover montanhas.",
  "Seja a mudança que você deseja ver no mundo.",
  "O sucesso começa quando você decide tentar.",
  "A felicidade está nas pequenas coisas da vida.",
];


//Eventos
biscuitClick.addEventListener("click", toggleScreen);
btnReturn.addEventListener("click", buttonReturn);


function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}


function selecionarFraseAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * phrasesBiscuit.length);
  const fraseSelecionada = phrasesBiscuit[indiceAleatorio];
  phrasesBiscuit.splice(indiceAleatorio, 1); // Remove a frase selecionada do array
  return fraseSelecionada;
}

function buttonReturn(){
  toggleScreen()
  const refreshPhrases = selecionarFraseAleatoria()
  changedText()
}

function changedText() {
  screen2.querySelector("p").innerText = selecionarFraseAleatoria();
  const luckyNumbers = numberRandom().join(" - ")
  screen2.querySelector(".luckyNumber").innerText = `Seus números da sorte hoje, são: ${luckyNumbers}` 
}

function numberRandom() {
  const numeroaleatorios  = []

  for (let i = 0; i < 4; i++) {
  const numeroaleatorio = Math.floor(Math.random() * 10);
  numeroaleatorios.push(numeroaleatorio)
}

return numeroaleatorios

}


changedText()