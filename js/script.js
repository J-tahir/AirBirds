
// const menu = document.getElementById("header-menu");

// document.onclick = function(e){
//     if(e.target.id !== "header-menu" &&e.target.id !== "check" ) {
//       menu.style.right="-100%"
//     }
//   }


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(showSlides, 6000);
}

function oclearnmore() {
  var moreText = document.getElementById("oc-more");
  var btnText = document.getElementById("oc-btn");

  if(moreText.style.display !== "none") {
    moreText.style.display = "none";
    btnText.innerHTML = "Learn More";
  } else{
    moreText.style.display = "inline";
    btnText.innerHTML = "Back";
  }
}

var tSlideIndex = 1;
TshowSlides(tSlideIndex);

function plusSlides(n) {
  TshowSlides(tSlideIndex += n);
}

function currentSlide(n) {
  TshowSlides(tSlideIndex = n);
}

function TshowSlides(n) {
  let i;
  let tSlides = document.getElementsByClassName("testimonials-slides");
  let dots = document.getElementsByClassName("testimonials-dot");
  if (n > tSlides.length) {tSlideIndex = 1}    

  if (n < 1) {tSlideIndex = tSlides.length}
    for (i = 0; i < tSlides.length; i++) {      
      tSlides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  
  tSlides[tSlideIndex-1].style.display = "block";  
  dots[tSlideIndex-1].className += " tactive";
}
