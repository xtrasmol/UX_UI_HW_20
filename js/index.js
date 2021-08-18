/*Process Nav*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementByClass("processNav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*Return top*/
$(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#toTopBtn').fadeIn();
    } else {
    $('#toTopBtn').fadeOut();
    }
});
    
$('#toTopBtn').click(function() {
    $("html, body").animate({
        scrollTop: 0
        }, 1000);
        return false;
    });
});