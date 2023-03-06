AOS.init();
const lightbox = GLightbox();


window.addEventListener("scroll", function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);

  }
  );

  


//header slider


const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
};




var header = document.getElementById("Background");

function HeaderBgChange() {
  header.style.backgroundColor = "#0f1922";
  if (scrollY == screenTop) {
    header.style.backgroundColor = "transparent";
  }

}



 
 