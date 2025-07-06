var myButton = document.getElementById('myButton');
var messageElement = document.getElementById('message');
var clickCount = 0;
myButton.addEventListener('click', function () {
    clickCount++;
    messageElement.textContent = "Button clicked ".concat(clickCount, " time(s)!");
});
