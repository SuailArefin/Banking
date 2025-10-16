console.log('log')
document.getElementById('add-amount').addEventListener('click',function(){

    const addAmount = document.getElementById('input-amount').value;
    console.log(addAmount);

    const amount = document.getElementById('balance').value;
    const addedamount = document.getElementById('balance').value =(amount + addAmount) ;

    console.log(addedamount);

})