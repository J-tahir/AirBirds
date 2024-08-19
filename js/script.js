
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


const model = document.getElementById("booking-window");

function showDialog(){
  document.getElementById("airbirds-body").classList.add("hide");
  model.show();
}

function hideDialog(){
  document.getElementById("airbirds-body").classList.remove("hide");
  model.close();
}



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


const form = document.getElementById("fc-form");
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.style.display = "block";
  result.innerHTML = "Please wait..."

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
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 2000);
        });
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

