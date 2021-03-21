var arrowUp = document.querySelector('.up');
var timer;
arrowUp.onclick = toTop;

window.onscroll = function(e){
    if(pageYOffset > 400){
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
}

function toTop(){
    var scrolled = pageYOffset;
    if(scrolled > 0){
        scrolled -= 100;
        scrollTo(0, scrolled - 90);
        setTimeout(toTop, 40)
    }
}