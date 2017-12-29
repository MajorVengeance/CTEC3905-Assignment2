var slideIndex = 1;
var imgCapt;
document.getElementsByTagName("body")[0].addEventListener("load", initGallery(), false);

function initGallery() {
  imgCapt = JSON.parse(imgTxt);
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i = imgCapt.imgData.length;
  var imageToChange = document.getElementById("currentImage");
  if (n - 1 >= i) {
    n = 1;
  }
  else if (n == 0) {
    n = i;
  }
  slideIndex = n;
  var imageNumber = document.getElementById("numberText");
  var imageNumberText = n + " / " + i;
  imageNumber.innerHTML = imageNumberText;
  imageToChange.src = imgCapt.imgData[n - 1].source;
  imageToChange.alt = imgCapt.imgData[n - 1].caption;
  var imageCaption = document.getElementById("caption");
  imageCaption.innerHTML = imgCapt.imgData[n - 1].caption;

}