document.addEventListener('DOMContentLoaded', function() {
//Dom stucture ta akbare load korte

document.getElementById('Flood-Donation-btn').addEventListener('click',function(){

    const donateam = getInputFieldValueById('donate-1');//function set kore rakci id dialey value k float kore output dibe
    const floodbalance = displayedBalance('balance-flood');//function set kore rakci id dialey value k float kore output dibe
    console.log(floodbalance);
    console.log(donateam);
    const displayval = floodbalance + donateam;
    document.getElementById('balance-flood').innerText = displayval;






    const Mainbalance = displayedBalance('balance');
    const displayMainBalance = Mainbalance - donateam;
    document.getElementById('balance').innerText = displayMainBalance;
    




});


document.getElementById('Flood-Donation-btn-2').addEventListener('click',function(){

    const donateam = getInputFieldValueById('donate-2');
    const floodbalance = displayedBalance('balance-sawab');
    console.log(floodbalance);
    console.log(donateam);
    const displayval = floodbalance + donateam;
    document.getElementById('balance-sawab').innerText = displayval;






    const Mainbalance = displayedBalance('balance');
    const displayMainBalance = Mainbalance - donateam;
    document.getElementById('balance').innerText = displayMainBalance;




});

document.getElementById('Flood-Donation-btn-3').addEventListener('click',function(){

    const donateam = getInputFieldValueById('donate-3');
    const floodbalance = displayedBalance('balance-blood');
    console.log(floodbalance);
    console.log(donateam);
    const displayval = floodbalance + donateam;
    document.getElementById('balance-blood').innerText = displayval;






    const Mainbalance = displayedBalance('balance');
    const displayMainBalance = Mainbalance - donateam;
    document.getElementById('balance').innerText = displayMainBalance;




});




});

      const p =document.createElement('p');
      p.innerText = ` Donated : ${displayval} Crurrent Balance ${displayMainBalance}`;
      console.log(p);
      document.getElementById('transections').appendChild(p);
