document.getElementById('textarea1').addEventListener('change', function (event) {
    // Get the text content of the textarea
    const text = event.target.value;

    // Check if the text contains "/1" anywhere
    if (text.includes('/1')) {
        alert('correct');
        // Display the popup
        //document.getElementById('popup').style.display = 'block';
    } else {
        alert('wrong');
        // Hide the popup
       // document.getElementById('popup').style.display = 'none';
    }
});
