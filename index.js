const editor = document.getElementById('editor');
const textInput = document.getElementById('textInput');

textInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
    const text = textInput.value.trim();

    if (text.startsWith('/1')) {
        // Append text as h1
        const h1Element = document.createElement('h1');
        h1Element.textContent = text.slice(2); // Remove '/1' from the text
        editor.appendChild(h1Element);
    } else {
        // Append text as a paragraph
        const pElement = document.createElement('p');
        pElement.textContent = text;
        editor.appendChild(pElement);
    }

    // Clear the input
    textInput.value = '';
    }
});

textInput.addEventListener('input', function (event) {
    // Get the text content of the input
    const text = event.target.value;

    // Check if the text contains "/1" anywhere
    if (text.includes('/1')) {
    
        // Display the popup
        document.getElementById('popup').style.display = 'block';
    } else {

        // Hide the popup
       document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('editor').addEventListener('input', function (event) {
    const text = event.target.value;

    // Check if the text contains "/1" anywhere
    if (text.includes('/1')) {
        document.getElementById('popup').style.display = 'block';
    } else {
        document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('addBlocks').addEventListener('click', function () {
    // Add logic for "Add blocks" option
    document.getElementById('editor').value += '\n<!-- Add your block elements here -->';
    document.getElementById('popup').style.display = 'none'; // Hide the popup after action
});

document.getElementById('heading1').addEventListener('click', function () {
    // Add logic for "Heading 1" option
    document.getElementById('editor').value += '\n# Heading 1';
    document.getElementById('popup').style.display = 'none'; // Hide the popup after action
    
});

document.getElementById('expandableHeading1').addEventListener('click', function () {
    // Add logic for "Expandable Heading 1" option
    document.getElementById('editor').value += '\n<details>\n<summary><h1>Expandable Heading 1</h1></summary>\n<!-- Add your content here -->\n</details>';
    document.getElementById('popup').style.display = 'none'; // Hide the popup after action
});

    
