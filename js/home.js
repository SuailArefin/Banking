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

     /////////////////////withdraw

        document.getElementById('withdraw').addEventListener('click',function(){


        //age balance neo ase const ke call korley hbe


        //.......................
        const getamount = document.getElementById('input-amount').value;
        const withdraw = parseFloat(getamount);
        const withdrawamount =(addedamount - withdraw) ;
        console.log(withdrawamount);

        document.getElementById('balance').innerText = withdrawamount;


        


    })

   

})

