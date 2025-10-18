console.log('log')
///////////////////////////add amount

//step 1 kon id trigger hbe click (kon evant) a 
document.getElementById('add-amount').addEventListener('click',function(){

//kon value ta nibo
    const addAmount = document.getElementById('input-amount').value;
    console.log(addAmount);
//kon valuer sathe jog korbo seta nibo 
    const amount = document.getElementById('balance').innerText;
    const amountbalance =  parseFloat(amount);//2 ta input key float a covert korci jog korte
    const inputamountbalance =  parseFloat(addAmount);

    const addedamount =(amountbalance + inputamountbalance) ;
//dekhavo result
    console.log(addedamount);
    document.getElementById('balance').innerText = addedamount;


   

})
//lesson-------->>> ami uporer function e jodi cashout kori tahole age add oney call krley akbar cashout kaj korche karon 
//cahsout ta add money er vitore tai baire arekta funchtion banabo cash out er jonno 

