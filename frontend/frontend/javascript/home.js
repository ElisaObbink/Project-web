var plus = document.querySelector('main p');
var eentje = document.querySelector('.boek');
var populair = document.querySelector('.populair');
var zoekverhaal = document.querySelector('.zoekverhaal');
var zoek = document.querySelector('.zoek');

function show() {
    plus.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');
    if ( plus.classList.contains('toevoegen') ) {
        plus.innerHTML = '√';
    }
    else {
        plus.innerHTML = '+';
    }
}

plus.addEventListener('click', show);


  function countUp() {
  var countEl = document.querySelector('.counter');
  var x = 0;
  var y = countEl.dataset.to;  
  
  function addNum() {
    countEl.innerHTML = x;
    x += 1; // hij doet er steeds een bij.
    if (x > y ) {
      clearInterval(timer);
    }
  }
  
  var timer = window.setInterval(addNum, 30);
  
}
countUp();

function showMenu() {
    zoek.classList.toggle('actief');
    if ( zoek.classList.contains('actief') ) {
        unfade(zoekverhaal);
        fade(populair);
    }
    else {
        fade(zoekverhaal);
        unfade(populair);
    }
}

zoek.addEventListener('click', showMenu);
// fade = laat een element verdwijnen in dit geval (populair).
function fade(element) {
    var op = 1;  // zorgt voor fade effect in x aantal tijd.
    var timer = setInterval(function () {
        if (op <= 0.1){ // if opasity kleiner dan 0.1 dan stopt hij.
            clearInterval(timer);// zal herhalen tot 0.1
            element.style.display = 'none';
        }
        element.style.opacity = op;// nu zet hij waarde van lijn 62.
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;// veranderd waarde op met 0.1
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // Hij begint volledig onzichtbaar. 1 = zichtbaar, 0 = onzichtbaar. 
    element.style.opacity = op; //Hier zeggen we dat het element onzichtbaar moet zijn.
    element.style.display = 'flex'; //Hier tonen we het onzichtbare element, zodat hij niet onzichtbaar de animatie gaat uitvoeren.
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}