function makepass() {
    const length = document.getElementById('rangePass').value;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// По клику на кнопку
function resultToDiv() {
    const password = makepass();
    if (password.length > 37) {
        document.getElementById('result').style.fontSize = 35+'px';
    } 
    document.getElementById("result").innerHTML = makepass();
}