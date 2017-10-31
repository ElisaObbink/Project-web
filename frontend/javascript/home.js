var plus = document.querySelector('main p');// de + wordt aangeroepen
var eentje = document.querySelector('.boek');// roept 1tje op
var populair = document.querySelector('.populair');// roept de verhalen op met de class populair.(standaard verhalen).
var zoekverhaal = document.querySelector('.zoekverhaal'); // roept de niet zichtbare verhalen op.
var zoek = document.querySelector('.zoek');// roept het element in het menu aan.

// function gaat lopen en roept de class toevoegen op. daarna wordt de class toegevoegd opgeroepen waardoor het eentje er komt te staan.
function show() {
    plus.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');
    if ( plus.classList.contains('toevoegen') ) { // als de plus class toevoegen krijgt maakt vinkje. als deze er al is maak +
        plus.innerHTML = '√';
    }
    else {
        plus.innerHTML = '+';
    }
}

plus.addEventListener('click', show);
// de function show gaat lopen bij een click op plus.

// bron:https://codepen.io/hvShd47/pen/bppYjz?page=2&
  function countUp() {
  var countEl = document.querySelector('.counter');// roept class counter op (oogicoon).
  var x = 0;
  var y = countEl.dataset.to;  
  
  function addNum() {
    countEl.innerHTML = x;
    x += 1; // hij doet er steeds een bij.
    if (x > y ) { // als x groter is dan y stopt de timer.
      clearInterval(timer);
    }
  }
  
  var timer = window.setInterval(addNum, 30);// 30 is de snelheid van de timer.
  
}
countUp();

//
function showMenu() {
    zoek.classList.toggle('actief');
    if ( zoek.classList.contains('actief') ) {
        unfade(zoekverhaal);// function unfade werkt op class zoekverhaal.
        fade(populair);// function fade werkt op class populair
    }
    else { // zodat men weer terug kan klikken net als bij +
        fade(zoekverhaal);
        unfade(populair);
    }
}

zoek.addEventListener('click', showMenu);

//element laten verdwijnen
function fade(element) {
    
    var op = 1;  // Hij begint volledig zichtbaar. 1 = zichtbaar, 0 = onzichtbaar. 

    var timer = setInterval(function () { // Loop totdat clearInterval(timer) wordt aangeroepen.
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none'; // Als 'op' 0 is, is het element onzichtbaar. Dan stopt de loop en zet hij de css-waarde 'display' op none.
        }
        element.style.opacity = op; // De opacity van het element wordt aangepast aan de waarde van 'op'.
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"; // Hier gebeurt hetzelfde eigenlijk als op de vorige lijn, maar dan voor Internet Explorer. Dan werkt hij daar ook.
        op -= op * 0.1; // Iedere keer dat de loop op deze regel komt, wordt de waarde van 'op' aangepast.
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