function writeInfo(event) {
  console.log("x-coördinaat: " + event.pageX);
  console.log("y-coördinaat: " + event.pageY);
  console.log("muisknop: " + event.which);
}

$(document).ready(function() {
  $(document).on("click", writeInfo);
});