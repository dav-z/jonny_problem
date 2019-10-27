function openvid() {
  document.getElementById("video1").src = "https://www.youtube.com/embed/aFvaxcLtFv0?autoplay=1&fs=1";
  document.getElementById("video-container").style.display = "flex";
}
function closevid() {
  document.getElementById("video1").src = "";
  document.getElementById("video-container").style.display = "none";
}
