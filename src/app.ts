const myButton = document.getElementById('myButton') as HTMLButtonElement;
const messageElement = document.getElementById('message') as HTMLParagraphElement;

let clickCount: number = 0;

myButton.addEventListener('click', () => {
    clickCount++;
    messageElement.textContent = `Button clicked ${clickCount} time(s)!`;
});
