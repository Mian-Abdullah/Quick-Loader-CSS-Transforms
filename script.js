
const container = document.querySelector('.loader');
const numLines = parseInt(getComputedStyle(container).getPropertyValue('--loader-lines'));
for (let i = 0; i <= numLines; i++) {
    let span = document.createElement('span');
    span.style.setProperty('--i', i);
    container.appendChild(span);
}
