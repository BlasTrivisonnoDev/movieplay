

export function slider (prevIcon, nextIcon){
  
    var slideIndex = 1;
    showSlides(slideIndex);
  
    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
  
    prevIcon.addEventListener('click', () => {
    plusSlides(-1)
    })
  
    nextIcon.addEventListener('click', () => {
        plusSlides(1)
    })
  
 
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    if (n > slides.length)
     {
      slideIndex = 1
    } 
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
   
    slides[slideIndex-1].style.display = "block"; 
  
    
  }
  
  // mover los slides automaticamente
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
  }
  
}
