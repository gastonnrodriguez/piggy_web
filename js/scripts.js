window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").classList.remove('theme');
    document.getElementById("navbar").classList.add('bg-white');
    document.getElementById("navbar").classList.add('scrolled');
    document.getElementById("logo").classList.remove('logo');
    document.getElementById("logo").classList.add('logo-scrolled');
  } else{
    document.getElementById("navbar").classList.remove('bg-white');
    document.getElementById("navbar").classList.add('theme');
    document.getElementById("logo").classList.add('logo');
    document.getElementById("logo").classList.remove('logo-scrolled');
  }
}