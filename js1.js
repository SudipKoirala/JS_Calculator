const input = document.querySelector('input');

const appendToDisplay = (par)=>{
    input.value += par;
};

const calculate = ()=>{
    try{input.value = eval(input.value)}
    catch(error){
        input.style.fontSize = "1rem"
        input.value = "operator pachhi kei hall na bodu"
    }
}

const clearDisplay = ()=>{
    input.value = "";
}
