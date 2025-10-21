// function sum (num1,num2){
//     const result = num1 + num2;
//     console.log(result);
// }

//amra choto akta funtion likci ja input feild er value je id dia set kora tar theke id take nia ashbe 
//ja dia amra kabr funtion likhe bar bar use korte parbo...
//id name ar value moddhe connection crerate kore 

function getInputFieldValueById(id){//function name dia ki nibe ta set korechi

    const inputValue = document.getElementById(id).value;//nia ki korbe ta set korechi
        const floatvalue = parseFloat(inputValue);
        console.log(id, inputValue);//just to show
        return floatvalue;
}

//sob donte er ammount amra ey fucntion call kore nite parbo just tader diff id ta dia
//input er valu nite parbo



function displayedBalance(id){
    const displayed = document.getElementById(id).innerText;
    const displayedfloatvalue = parseFloat(displayed);
    console.log(id, displayedfloatvalue);
    return displayedfloatvalue;


}
