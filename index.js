document.addEventListener('DOMContentLoaded', function () {

    const inputRange = document.getElementById('rangePass');
    const resultElement = document.getElementById('result');

    inputRange.addEventListener('change', function () {
        document.querySelector('.output').innerHTML = inputRange.value;
    });

    document.getElementById('btnPass').addEventListener('click', function () {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        for (var i = 0; i < inputRange.value; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        if (result.length > 35) {
            resultElement.style.fontSize = 25 + 'px';
        }

        resultElement.innerHTML = result;
    });

});