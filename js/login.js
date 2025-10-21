console.log("log")

document.getElementById('login').addEventListener('click', function(event){
    event.preventDefault(); //<---reload orevent kore jar karone data abr refresh hoye jayna
    
    
    const phoneNumber =document.getElementById('input-number').value;
    console.log(phoneNumber);

        const phonePass =document.getElementById('input-pass').value;
    console.log(phonePass);


    if(phoneNumber === '1989' && phonePass === '1989'){

        console.log("Login Success");
        window.location.href = '/home.html'
    }
    else{
        alrt('Login UnSuccess');
    }

    

}
)