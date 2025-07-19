/*
add money to the account 
s-1: add event handler. and prevent page reload after form submit

s-2: get money to be added to the account balance get the pin number
s-3: verify to the pin number 

*/

// cash in part
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    
    const addMoney = document.getElementById('add-money').value ;
    const pinNumber = document.getElementById('pin-number').value ;

    if (pinNumber === '1234') {
        const wallet = document.getElementById('my-amount').innerText;
        const addMoneyNumber = parseFloat(addMoney);
        const addWalletBalance = parseFloat(wallet);
        const updateBalance= addMoneyNumber + addWalletBalance;

        document.getElementById('my-amount').innerText = updateBalance;
        
        
    }
    else{
        alert('Failed to add money ! Try again.')
    }
   
})

// cash out part
document.getElementById('btn-cah-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById('cash-out-add-money').value ;
    const cashOutMoney = parseFloat(cashOutAmount);

    const cashOutPin = document.getElementById('cash-out-pin').value ;

    if (cashOutPin === '1234') {
        const wallet = document.getElementById('my-amount').innerText;
        const walletMoney =parseFloat(wallet);

        const updateAmount = walletMoney - cashOutMoney;
        document.getElementById('my-amount').innerText = updateAmount;

    }
    else{
        alert('Wrong pin number ! please try again later')
    }
    
    
})

