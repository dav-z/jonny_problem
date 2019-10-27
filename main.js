function openvid() {
  document.getElementById("video1").src = "https://www.youtube.com/embed/aFvaxcLtFv0?autoplay=1&fs=1";
  document.getElementById("video-container").style.display = "flex";
}
function closevid() {
  document.getElementById("video1").src = "";
  document.getElementById("video-container").style.display = "none";
}

function playvideo(div) {
  // var div = document.getElementById(this.id);
  console.log(div.id);
  var height = div.offsetHeight;
  var width = div.offsetWidth;
  div.style.display = 'none';
  div.nextElementSibling.height = height;
  div.nextElementSibling.width = width;
  div.nextElementSibling.style.display = 'block';
}
