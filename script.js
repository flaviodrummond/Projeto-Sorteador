
const convertButton = document.querySelector('.convert-button')

const resultValue = document.querySelector('.result-value')

function buttonClick() {

    const min = Math.round (document.querySelector('.min').value)
    const max = Math.round (document.querySelector('.max').value)

    const result = Math.round(Math.random() * (max - min + 1)) + min;

    if(min === max){
        
    } else {
        alert('Valor menor que o valor máximo')
    }



    const resultelement = document.createElement('div')

    resultelement.classList.add('result-value')
    resultelement.innerHTML = result

    const resultValue = document.querySelector('.result-value')
    resultValue.innerHTML = ''

   
    resultValue.append(result)

    if(resultValue.style.display == 'block'){
        resultValue.style.display = 'none'

    } else {
        resultValue.style.display = 'block'
    }
}


convertButton.addEventListener('click', buttonClick)