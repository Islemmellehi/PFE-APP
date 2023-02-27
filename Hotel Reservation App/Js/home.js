const slides = document.querySelectorAll(".slide");

var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const goPrev = () => {
  counter--;
  slideImage();
};
const goNext = () => {
  counter++;
  slideImage();
  if (counter == 4) {
    counter = 0;
  }
  slideImage();
};

var header = document.getElementById("Background");

function HeaderBgChange() {
  header.style.backgroundColor = "#4E6E81";
  if (scrollY == screenTop) {
    header.style.backgroundColor = "transparent";
  }
}

let clip = document.getElementById("videoAD");
clip.addEventListener("mouseover", function (e) {
  clip.play();
});

clip.addEventListener("mouseout", function (e) {
  clip.pause();
});

let counts = setInterval(updated);
let upto = 0;

function updated() {
  var count = document.getElementById("counter1");

  count.innerHTML = ++upto;
  if (upto === 1000) {
    count.innerHTML = 9 + " M";
    clearInterval(counts);
  }
}


let counts2 = setInterval(updated2);
let upto2 = 0;

function updated2() {
  var count2 = document.getElementById("counter2");

  count2.innerHTML = ++upto2;
  if (upto2 === 1000) {
    count2.innerHTML = 10 + " M";
    clearInterval(counts2);
    
  }
}
let counts3 = setInterval(updated3);
let upto3 = 0;

function updated3() {
  var count3 = document.getElementById("counter3");

  count3.innerHTML = ++upto3 + "/5";
  if (upto3 === 5) {
    clearInterval(counts3);
  }
}
let counts4 = setInterval(updated4);
let upto4 = 0;

function updated4() {
  var count4 = document.getElementById("counter4");

  count4.innerHTML = ++upto4;
  if (upto4 === 120) {
    clearInterval(counts4);
  }
}




//read more button 
function ReadMore(){
  var dots = document.getElementById("dots")
  var moreText = document.getElementById("more")
  var btnText = document.getElementById("readBtn")
  

  if(dots.style.display === 'none'){
    dots.style.display ="inline"
    btnText.innerHTML ="Read More " 
    moreText.style.display ="none"
  }
  else{
    dots.style.display = "none"
    btnText.innerHTML= "Read Less"
    moreText.style.display="inline"
  }
}


