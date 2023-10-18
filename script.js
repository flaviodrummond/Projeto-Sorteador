function buttonClick() {

    const onNumber = Math.ceil (document.querySelector(".one-number").value)
    const twoNumber = Math.floor (document.querySelector(".two-number").value)

    if (onNumber >= twoNumber){
        alert("O valor mínimo não pode ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (twoNumber - onNumber + 1) + onNumber)

    alert(result)
    }
 
}