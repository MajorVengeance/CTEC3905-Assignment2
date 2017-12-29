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
  //Get Length of imgData array so we know how many images we have in the gallery
  var i = imgCapt.imgData.length;
  var imageToChange = document.getElementById("currentImage");
  //if the given index (n) - 1 is greater than or equal to the max index (i) 
  //then we need to go round the loop again, so set n to 1
  if (n - 1 >= i) {
    n = 1;
  }
  //if n is 0, then we were at the bottom of the list, so we need to go to the top
  //so set n to max index (i)
  else if (n == 0) {
    n = i;
  }
  slideIndex = n;
  var imageNumber = document.getElementById("numberText");
  //set the text to read for example "3 / 6"
  var imageNumberText = n + " / " + i;
  //Get the source of the image in the nth place of the array. Arrays are 0-based, so use n-1
  imageNumber.innerHTML = imageNumberText;
  imageToChange.src = imgCapt.imgData[n - 1].source;
  //use the caption text for the alt tag
  imageToChange.alt = imgCapt.imgData[n - 1].caption;
  var imageCaption = document.getElementById("caption");
  //set the caption text
  imageCaption.innerHTML = imgCapt.imgData[n - 1].caption;

}
