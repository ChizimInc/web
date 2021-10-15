let addBtn        = document.getElementById('addBtn')
let multiplyBtn   = document.getElementById('multiplyBtn')
let subtrBtn      = document.getElementById('subtrBtn')
let divisionBtn   = document.getElementById('divisionBtn')
let questionInput = document.getElementById('question')
let resultInput   = document.getElementById('result')
let sentResultBtn = document.getElementById('sentResultBtn')
let exCounter     = document.getElementById('exCounter')

let DataObj = {}

getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

onSentResult = () => {
  let yourResult = parseInt(resultInput.value)
  let correctResult
  switch (DataObj.operation) {
    case '+':
      correctResult = DataObj.numberOne + DataObj.numberTwo
      break;
    case '*':
      correctResult = DataObj.numberOne * DataObj.numberTwo
      break;
    case '-':
      correctResult = DataObj.numberOne - DataObj.numberTwo
      break;
    case '/':
      correctResult = DataObj.numberOne / DataObj.numberTwo
      break;
  }

  if (yourResult == correctResult) {
    DataObj.counter = parseInt(exCounter.value)
    DataObj.counter++
    exCounter.value = DataObj.counter
    resultInput.value = ''
    if(DataObj.counter < 11){
      onClickBtn(DataObj.operation, DataObj.button)
    }else{
      alert("Final")
      DataObj.counter = 1
      exCounter.value = DataObj.counter
    }
  }else{
    resultInput.value = ''
    alert("Gresit")
  }
}

onClickBtn = (value, btn) => {

  let numberOne = getRandomNumber(10)
  let numberTwo = getRandomNumber(10)

  switch (value) {
    case '+':
      questionInput.value = numberOne + " + " + numberTwo
      break;
    case '*':
      questionInput.value = numberOne + " * " + numberTwo
      break;
    case '-':
      questionInput.value = numberOne + " - " + numberTwo
      break;
    case '/':
      questionInput.value = numberOne + " / " + numberTwo
      break;
  }

  if (btn.value != DataObj.operation) {
    DataObj.counter = 1
    exCounter.value = DataObj.counter
  }

  DataObj.numberOne = numberOne
  DataObj.numberTwo = numberTwo
  DataObj.operation = value
  DataObj.button    = btn

}

addBtn.addEventListener('click', onClickBtn.bind(null, addBtn.value, addBtn))
multiplyBtn.addEventListener('click', onClickBtn.bind(null, multiplyBtn.value, multiplyBtn))
subtrBtn.addEventListener('click', onClickBtn.bind(null, subtrBtn.value, subtrBtn))
divisionBtn.addEventListener('click', onClickBtn.bind(null, divisionBtn.value, divisionBtn))
sentResultBtn.addEventListener('click', onSentResult)
