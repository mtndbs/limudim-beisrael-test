function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
    document.querySelector('.js-progress-bar').style.width = scrolled + "%";
}
  
window.addEventListener('scroll', handleScroll);