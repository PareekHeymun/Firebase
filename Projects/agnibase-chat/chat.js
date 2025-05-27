// Create a container div for positioning
const container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = '50px';
container.style.left = '100px';
container.style.background = '#f9f9f9';
container.style.padding = '20px';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '8px';

// Create a text box
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type something...';

// Create a button
const button = document.createElement('button');
button.textContent = 'Show Text';

// Create a paragraph to display the text
const display = document.createElement('p');

// Add elements to the container
container.appendChild(input);
container.appendChild(button);
container.appendChild(display);

// Add the container to the page
document.body.appendChild(container);

// Add a click event to the button
button.addEventListener('click', () => {
  display.textContent = input.value;
});