//review slider
const rprev = document.getElementById("r-prev");
const rnext = document.getElementById("r-next");
const rTrack = document.getElementById("r-slider");
const rslides = document.getElementsByClassName("r-slide");
let slidenumber = 1;
let length = rslides.length;
console.log(slidenumber)

const nextSlide = ()=>{
  rTrack.style.transform = `translateX(-${slidenumber*600}px)`;
  slidenumber++;
}

const prevSlide = ()=>{
  rTrack.style.transform = `translateX(-${(slidenumber-2)*600}px)`;
  slidenumber--;
}

rnext.addEventListener('click', ()=>{
  if(slidenumber < length-1)
    nextSlide();
})

rprev.addEventListener('click', ()=>{
  if(slidenumber>1)
    prevSlide();
  })
  

// Owner centeric section functionalities
function oclearnmore() {
  var moreText = document.getElementById("oc-more");
  var btnText = document.getElementById("oc-btn");
  var briefText = document.getElementById("oc-brief");

  if(moreText.style.display !== "none") {
    moreText.style.display = "none";
    btnText.innerHTML = "Learn More";
    briefText.style.display = "block";

  } else{
    moreText.style.display = "inline";
    btnText.innerHTML = "Back";
    briefText.style.display="none";
  }
}
// Testimonial slides functionalities 
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
//Locations 
function openLocation(evt, locationName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(locationName).style.display = "block";
  evt.currentTarget.className += " active";
}




// Contact section form submission
const cuForm = document.getElementById('cu-form');
const cuResult = document.getElementById('cu-result');
cuForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(cuForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  cuResult.style.display = "block";
  cuResult.innerHTML = "Please wait..."
fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            cuResult.innerHTML = json.message;
        } else {
            cuResult.innerHTML = json.message;
        }
    })
    .catch(error => {
        cuResult.innerHTML = "Something went wrong!";
    })
    .then(function() {
        cuForm.reset();
        setTimeout(() => {
            cuResult.style.display = "none";
        }, 2000);
    });
});
// footer contact form submission
const fcForm = document.getElementById('fc-form');
const fcResult = document.getElementById('fc-result');
fcForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(fcForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  fcResult.style.display = "block";
  fcResult.innerHTML = "Please wait..."
fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            fcResult.innerHTML = json.message;
        } else {
            fcResult.innerHTML = json.message;
        }
    })
    .catch(error => {
        fcResult.innerHTML = "Something went wrong!";
    })
    .then(function() {
        fcForm.reset();
        setTimeout(() => {
            fcResult.style.display = "none";
        }, 2000);
    });
});
// FAQs accordion
const accordions = document.querySelectorAll(".faqs-accordion");
const header = document.querySelectorAll(".faqs-accordion__header");
for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function() {
      this.classList.toggle("faqs-active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
  });
}