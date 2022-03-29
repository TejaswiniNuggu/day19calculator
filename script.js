// document.getElementById("submit").addEventListener("click",function(){
//     let num1=document.getElementById("num1")
//     //console.log(num1.value)
//     let num2=document.getElementById("num2")
//     //console.log(num2.value)
//     let symbol = document.getElementById("symbol")
//     //console.log(symbol.value)

//     if(symbol.value == 'add'){
//         let sum=num1.value+num2.value;
//         console.log(sum)
//         //console.log(sum.value)
//     }
    
// })


// This function clear all the values
function clear() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }