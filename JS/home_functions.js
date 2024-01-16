const titleBMP = new Image();
const titleGIF = new Image();
titleBMP.src = "images/title.bmp";
titleGIF.src = "images/title.gif";

function turnMessage() {
  document.title.src = titleBMP.src;
  return;
}

function turnPicture() {
  document.title.src = titleGIF.src;
  return;
}
