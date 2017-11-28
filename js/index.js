var works = document.getElementById("work_boxs"),
    popup = document.getElementById("popup"),
    big = document.getElementById("big"),
    closePopup = document.getElementById("close_popup"),
    nav = document.getElementById("nav"),
    closeNav = document.getElementById("close_nav");

// image 
works.addEventListener('click', function(e) {
  if(e.target.nodeName == 'IMG'){
    big.src = 'img/' + e.target.dataset.src + '.png';
    popup.classList.add('show')
  }
})

// pop-close
closePopup.addEventListener('click', function() {
  popup.classList.remove('show');
})

// nav-close
closeNav.addEventListener('click', function(e) {
  nav.classList.add('hide');
  e.stopPropagation()
})

// nav
nav.addEventListener('click', function() {
  if(this.classList.contains('hide')){
    this.classList.remove('hide')
  }
})