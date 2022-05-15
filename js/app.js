function getPin(params) {

    const pin = Math.round(Math.random() * 10000);
    //   55+ '' = '55'
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin
    } else {
        return getPin()
    }
    
}


function generatePin(params) {

     const pin =getPin()
    document.getElementById('pin-input').value = pin;
}