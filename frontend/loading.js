function myFunction() {
    var lijst = document.classList('.zien');
    var menu = document.classList('menuitem');
    if (lijst.style.display === "none") {
        lijst.style.display = "block";
    } else {
        lijst.style.display = "none";
    }
}

plus.addEventListener('click', myFunction);