document.addEventListener('DOMContentLoaded', function() {


document.getElementById('Flood-Donation-btn').addEventListener('click',function(){

    const donateam = getInputFieldValueById('donate-1');
    const floodbalance = displayedBalance('balance-flood');
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