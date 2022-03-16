var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("arrow-up").style.opacity = 0
  } else {
    document.getElementById("arrow-up").style.opacity= 100
  }
  prevScrollpos = currentScrollPos;
}