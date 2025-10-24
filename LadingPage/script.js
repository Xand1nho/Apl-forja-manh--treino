var textbox = document.querySelector('#span');
var text = textbox.textContent;

textbox.innerHTML = null;

text.split('').forEach(function (c) {
    textbox.innerHTML += '<span>' + c + '</span>';
});