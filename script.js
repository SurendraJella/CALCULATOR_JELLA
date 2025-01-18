let display =document.getElementById('display');
let calculation='';
let last=false;

function jella(number){
    if(number=== '.'){
        let parts = calculation.split(/[-+*/]/);
        let lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) {
          return;
        }  
    }
    calculation +=number;
    display.value=calculation;
    last=false;
}
function backspace(){
    calculation = calculation.slice(0, -1);
    display.value = calculation;

}

function restart(){
    window.location.reload()
    last=false;
}
function calcute(operator)
{
    if(last){
        calculation =calculation.slice(0,-1)+ operator;
        display.value = calculation;
    }
    else{
        calculation += operator;
        display.value = calculation;
        last=true;
    }
} 
  function surendra() {
    if (last) { 
        display.value="cannot end with operator.";
      }
        
        else{
            let result = eval(calculation);
            display.value = result;   
            calculation = '';
            last=false;
        }
  }
  
  
  
