function updateScroll() {
  var nav = document.getElementById('nav').children;
  var panels = document.getElementsByClassName('pane');
  var first = true;
  for(i = 0; i < panels.length; i++) {
    var top = panels[i].getBoundingClientRect().top;
    if(first && top > -200) {
      nav[i].className = 'active';
      first = false;
    } else nav[i].className = '';
  }
}

document.addEventListener('scroll', updateScroll);


$(window).scroll(function(){
    $(".header__logo").css("opacity", 1 - $(window).scrollTop() / 60);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/
