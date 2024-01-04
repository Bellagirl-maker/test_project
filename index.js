
        // document.getElementById('textarea1').addEventListener('keydown', function(event) {
        //     if (event.key === '/' && event.ctrlKey) {
        //         createH1();
        //     }
        // });

        // function createH1() {
        //     var textarea = document.getElementById('textarea1');
        //     var text = textarea.value;

        //     // Extract text after '/1 ' (excluding the '/1 ')
        //     var newText = text.substring(text.indexOf('/1 ') + 3);

        //     // Create H1 element
        //     var h1Element = document.createElement('h1');
        //     h1Element.textContent = newText;

        //     // Append H1 element to the page
        //     document.body.appendChild(h1Element);

        //     // Clear textarea
        //     textarea.value = '';
        // }

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

    