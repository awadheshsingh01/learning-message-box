(function () {
  'use strict';
 
  var MAX_LENGTH = 500;
 
  var input = document.getElementById('message');
  var button = document.getElementById('ok');
  var result = document.getElementById('result');
  var counter = document.getElementById('counter');
 
  function clearResult() {
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
  }
 
  input.addEventListener('input', function () {
    counter.textContent = input.value.length + ' / ' + MAX_LENGTH;
  });
 
  button.addEventListener('click', function () {
    var text = input.value.trim().slice(0, MAX_LENGTH);
    clearResult();
 
    if (text === '') {
      var warning = document.createElement('p');
      warning.className = 'warn';
      warning.textContent = 'Please type a message first, then click OK.';
      result.appendChild(warning);
      input.focus();
      return;
    }
 
    var box = document.createElement('div');
    box.className = 'thanks';
 
    var heading = document.createElement('h2');
    heading.textContent = 'Thank you for visiting and providing your text message! Created by Awadhesh';
 
    var label = document.createElement('p');
    label.textContent = 'You wrote:';
 
    // textContent treats the visitor's text as plain text, never as HTML.
    var quote = document.createElement('blockquote');
    quote.textContent = text;
 
    box.appendChild(heading);
    box.appendChild(label);
    box.appendChild(quote);
    result.appendChild(box);
 
    input.value = '';
    counter.textContent = '0 / ' + MAX_LENGTH;
  });
})();
