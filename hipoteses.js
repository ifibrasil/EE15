// Este código é uma versão adaptada daquele disponível em:
// https://www.w3schools.com/howto/howto_css_modal_images.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var funcao = function(){
  modal.style.display = "block";
  modalImg.src = "hipoteses.png";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
