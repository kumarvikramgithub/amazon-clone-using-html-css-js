let slideIndex = 0;
showSlides(0);
// Next/previous controls
function plusSlides(n) {
  console.log(n);
  if(n<0&&slideIndex==0){
    slideIndex=0;
  }else if(n<0){
    slideIndex -=2;
  }
  showSlides(slideIndex);
}
function showSlides(n=0) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0;i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}