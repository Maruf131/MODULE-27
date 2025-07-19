//step-1 : set the event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    //step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();

    // step-3: get the phone number
    const phoneNumber= document.getElementById('Phone-number'). value ;
    const pinNUmber = document.getElementById('pin-number').value ;

    if (phoneNumber === '5' && pinNUmber === '1234') {
        console.log('You enter inside the webpage');
        window.location.href = 'home.html' // add another html file 
        
    }
    else{
        alert('please ensure right pin number');
    }
    
    
})
