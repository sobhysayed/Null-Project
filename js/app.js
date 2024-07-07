// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    document.body.appendChild(button);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a test paragraph.';
    document.body.appendChild(paragraph);

    // Add an event listener to the button
    button.addEventListener('click', function() {
        paragraph.textContent = 'The button was clicked!';
    });
});
