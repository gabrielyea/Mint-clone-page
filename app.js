const passFiled = document.getElementById("pass")
const passConf = document.getElementById("pass-conf")
const passConfWarning = document.getElementById("pass-conf-warning")
const warning_message = document.getElementById("warning")

const letters = document.getElementById("chars")
const lowerUpper = document.getElementById("lowUp")
const numbers = document.getElementById("num")
const symbols = document.getElementById("symb")

const reg_cases = [{field: lowerUpper,reg: /[a-z][A-Z]|[A-Z][a-z]/g},
                    {field: numbers, reg :/[0-9]/g},
                    {field: symbols, reg :/[°!"#$%&/()=?¡¿]/g}]

passFiled.onfocus = () => {
    warning_message.style.display = "block"
}

passFiled.onkeyup = () => {

    reg_cases.forEach(element => {
        evaluate(element)
    });

    if(passFiled.value.length >= 8) {
        makeValid(letters)
    }
    else{
        makeInvalid(letters)
    }
}

passConf.onblur = () => {
    checkConfPassword()
}

passConf.onkeyup = () => {
    checkConfPassword()
}

const evaluate = (c) =>{
    if(passFiled.value.match(c.reg)){
        makeValid(c.field)
    }
    else{
        makeInvalid(c.field)
    }
}

const makeValid = (field) => {
    console.debug("valid")
    field.classList.remove("invalid")
    field.classList.add("valid")
}

const makeInvalid = (field) => {
    field.classList.remove("valid")
    field.classList.add("invalid")
}

const checkConfPassword = () =>{
    if(passConf.value.length <= 0){
        passConfWarning.style.display = "block"
        passConfWarning.style.color = "red"
        passConfWarning.textContent = "Please confirm password."
        return
    }
    else if(passFiled.value !== passConf.value){
        passConfWarning.style.display = "block"
        passConfWarning.style.color = "red"
        passConfWarning.textContent = "Confirm password field does not match the password field."
        return
    }
    passConfWarning.style.display = "none"
}