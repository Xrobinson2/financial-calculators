"use strict"





window.onload = init;
const submit = document.getElementById("SubBtn")

// wiring the button up
function init(){
    submit.onclick = onSubBtnClicked;
    
}
// declares what button does
function onSubBtnClicked(){
    //checks to see if button fired
    console.log("onSubBtnClicked");
    
    //declaring variables & formulas
    const loanA = document.getElementById("loanA").value;
    const intrestR = document.getElementById("intrestR").value;
    const years = document.getElementById("years").value;
    var newTime = years * 12;
    var newInt = intrestR / ( 100 * 12 )


    //computing formulas
    let answer1 = ( loanA * newInt * ( 1 + newInt )**newTime) / ((1+newInt)**newTime - 1);
    
    let answer2 = answer1*newTime - loanA

    // declaring output
var totalMon = document.getElementById("totalMon");
var totalInt = document.getElementById("totalInt");


//display results
totalMon.value = answer1.toFixed(2) + "$.";
totalInt.value = answer2.toFixed(2) + "$";

}







