var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var treatSlideIndex = 1;
showTreatSlides(treatSlideIndex);

function plusTreatSlides(n2) {
    showTreatSlides(treatSlideIndex += n2);
}

function currentTreatSlide(n2) {
    showTreatSlides(treatSlideIndex = n2);
}

function showTreatSlides(n2) {
    var i2;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n2 > slides2.length) { treatSlideIndex = 1 }
    if (n2 < 1) { treatSlideIndex = slides2.length }
    for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }
    for (i2 = 0; i2 < dots2.length; i2++) {
        dots2[i2].className = dots2[i2].className.replace(" active", "");
    }
    slides2[treatSlideIndex - 1].style.display = "block";
    dots2[treatSlideIndex - 1].className += " active";
}

var suppliesSlideIndex = 1;
showSuppliesSlides(suppliesSlideIndex);

function plusSuppliesSlides(n3) {
    showSuppliesSlides(suppliesSlideIndex += n3);
}

function currentSuppliesSlide(n3) {
    showSuppliesSlides(suppliesSlideIndex = n3);
}

function showSuppliesSlides(n3) {
    var i3;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n3 > slides3.length) { suppliesSlideIndex = 1 }
    if (n3 < 1) { suppliesSlideIndex = slides3.length }
    for (i3 = 0; i3 < slides3.length; i3++) {
        slides3[i3].style.display = "none";
    }
    for (i3 = 0; i3 < dots3.length; i3++) {
        dots3[i3].className = dots3[i3].className.replace(" active", "");
    }
    slides3[suppliesSlideIndex - 1].style.display = "block";
    dots3[suppliesSlideIndex - 1].className += " active";
}