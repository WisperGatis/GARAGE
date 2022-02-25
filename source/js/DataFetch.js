var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
    var verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    var url = verse + '.txt';
    var request = new XMLHttpRequest();

};
request.onload = function() {
    poemDisplay.textContent = request.response;
};
fetch('products.json').then(function(response) {
    if(response.ok) {
        response.json().then(function(json) {
            products = json;
            initialize();
        });
    } else {
        console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
    }
});