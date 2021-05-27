//caching the DOM
var principal = document.getElementById('principal').value;
var rate = document.getElementById('rate').value;
var years = document.getElementById('years').value;
var result_val = document.getElementById('result');

//Computing the value of Interest
var interest = principal * years * rate/100;
var year = new Date().getFullYear()+parseInt(years);

//varting the rate input
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

//Computing final result
function compute()
{
 var p = document.getElementById('principal').value;
 var r = document.getElementById('rate').value;
 var years = document.getElementById('years').value;
 var y = new Date().getFullYear()+parseInt(years);
 var interest = p * y * r/100;
 if(p <= 0) {
     alert("Enter a positive number")
 }
 return document.getElementById('result').innerHTML = "If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+y+"\<br\>"
    
}
        