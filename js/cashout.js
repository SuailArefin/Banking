     /////////////////////withdraw
     console.log('withdraw')
     


        document.getElementById('withdraw').addEventListener('click',function(){


        //age balance neo ase const ke call korley hbe


        //.......................
        const getamount = document.getElementById('withdraw-amount').value;
        console.log(getamount);
        const withdraw = parseFloat(getamount);

        const getbalance = document.getElementById('balance').innerText;
        const floatbalance = parseFloat(getbalance);

        const withdrawamount =(floatbalance - withdraw) ;
        console.log(withdrawamount);

        document.getElementById('balance').innerText = withdrawamount;


        


    })
