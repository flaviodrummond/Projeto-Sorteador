
const convertButton = document.querySelector('.convert-button')

const resultValue = document.querySelector('.result-value')

function buttonClick() {

    const min = Math.ceil (document.querySelector('.min').value)
    const max = Math.floor (document.querySelector('.max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min >= max){

        alert('Valor minimo tem que ser MENOR que o valor máximo')
        resultValue.style.display = 'none'

    } else {

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
    
}


convertButton.addEventListener('click', buttonClick)