function buttonClick() {

    const onNumber = Math.ceil (document.querySelector(".one-number").value)
    const twoNumber = Math.floor (document.querySelector(".two-number").value)

    const result = Math.floor(Math.random() * (twoNumber - onNumber + 1) + onNumber)

    alert(result)

}