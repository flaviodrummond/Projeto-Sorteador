
const convertButton = document.querySelector('.convert-button')

function buttonClick() {

    const min = Math.round (document.querySelector('.min').value)
    const max = Math.round (document.querySelector('.max').value)

    const result = Math.round(Math.random() * (max - min + 1)) + min;

    alert(result)

}


convertButton.addEventListener('click', buttonClick)