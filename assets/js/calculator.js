/* TODO
 * 
 *  - Make screen global
 */

window.addEventListener('load', init, false);

function init(e) {       
    setListeners();
}

var setListeners = function() {
    var allSpans = new Array();
    var allSpans = document.getElementsByTagName('span');

    for(var i = 0; i < allSpans.length; i ++) {
        if(allSpans[i].innerHTML !== 'C' && allSpans[i].innerHTML !== '=') {
            allSpans[i].addEventListener('click', addChar, false);
        } else {
            if(allSpans[i].innerHTML === '=') {
                allSpans[i].addEventListener('click', gimmeResult, false);
            } else {
                allSpans[i].addEventListener('click', cleanThisShit, false);
            }
        }
    }
}

var addChar = function(e) {
    var screen = document.getElementById('screen');
    screen.innerHTML += e.currentTarget.innerHTML;
}

var gimmeResult = function() {
    var screen = document.getElementById('screen');
    var input = screen.innerHTML;
    var extra_input = spiceThingsUp();
    var regex = new RegExp("&.");
    
    input = input.replace(/x/g, '*').replace(/÷/g, '/');    
    
    if(!regex.test(extra_input))
        screen.innerHTML = eval(input + extra_input);
    else
        screen.innerHTML = extra_input;
}

var cleanThisShit = function() {
    var screen = document.getElementById('screen');
    screen.innerHTML = ''; 
}

var spiceThingsUp = function() {
    var operators = ['+', '-', '*', '/'];
    var special_char = ['&#169;', '&#174;', '&#8364;', '&#8482;', '&#9824;', '&#9827;'];

    var random_whatever = Math.floor((Math.random() * 100) + 1)

    if(!isPrime(random_whatever)) {
        var random_num = Math.floor((Math.random() * 9) + 1);
        var random_operator = operators [Math.floor((Math.random() * 3) + 1)];

        return random_operator + random_num;
    } else {
        return special_char[Math.floor((Math.random() * 5) + 1)];
    }
        
}

var isPrime = function(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}