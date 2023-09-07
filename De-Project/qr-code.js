document.addEventListener("DOMContentLoaded", function() {
  const scanner = new Instascan.Scanner({ video: document.getElementById("scanner") });

  Instascan.Camera.getCameras().then(function(cameras) {
      if (cameras.length > 0) {
          scanner.start(cameras[0]);
      } else {
          console.error("No cameras found.");
      }
  }).catch(function(error) {
      console.error(error);
  });
});
