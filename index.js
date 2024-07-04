let submit = document.getElementById("submit");
let textbox = document.getElementById("textbox");
let tofahrenheit = document.getElementById("tofahrenheit");
let tocelsius = document.getElementById("tocelsius");
let result = document.getElementById("result");
let temp;
function ramyar(){
  temp = Number(textbox.value)
  if (tofahrenheit.checked) {
    temp = temp * 9/5 + 32

    result.textContent = temp.toFixed(1) + "℉"

  }
  else if(tocelsius.checked){
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) +"℃"
  }
   else{
    result.textContent = " Select a unit"
    
  }
}