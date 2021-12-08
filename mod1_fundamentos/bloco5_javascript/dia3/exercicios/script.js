function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let tam=dezDaysList.length

let dia=document.querySelector('#days') //seleciona a lista UL com Id days
for (let i=0;i<tam;i+=1){ //função cria a lista
  let listaDias = document.createElement('li') //cria cada elemento da lista
  listaDias.innerText=dezDaysList[i] // cocloca um texto dentro do elemento da lista criado
  if(dezDaysList[i]==24 || dezDaysList[i]==31){
      listaDias.className="day holiday"
  }else if (dezDaysList[i]==4 || dezDaysList[i]==11 || dezDaysList[i]==18){
    listaDias.className="day friday"
  }else if (dezDaysList[i]==25){
    listaDias.className="day friday holiday"
  }  else {
    listaDias.className="day"
  }
dia.appendChild(listaDias) // acrescenta este elemento na lista com o ID days
}

const botaoContainer=document.querySelector('.buttons-container')
function feriados(nome){
  let botaoFeriado = document.createElement('button')
  botaoFeriado.innerText=nome
  botaoFeriado.id="btn-holiday"
  botaoContainer.appendChild(botaoFeriado)
  console.log(botaoContainer)
  console.log(botaoFeriado)
}
feriados('Feriados')


function botaoFeriado(){
  let selecao=document.querySelectorAll('.holiday')
  if (selecao[0].style.color=='red'){
    for (let k=0;k< selecao.length;k+=1){
      selecao[k].style.color='#777'    
    }
  } else{
    for (let k=0;k< selecao.length;k+=1){
      selecao[k].style.color='red'    
    }
  }
}
botaoContainer.addEventListener('click',botaoFeriado)