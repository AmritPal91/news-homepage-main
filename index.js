// Scrolling Restriction
const entireBody = document.getElementById("entireBody");
document.querySelector("#openSidebarMenu").addEventListener("click", () => {
  if (entireBody.style.overflowY == "scroll") {
    entireBody.style.overflowY = "hidden";
  } else if (entireBody.style.overflowY == "hidden") {
    entireBody.style.overflowY = "scroll";
  }
});

//Lock Orientation ~ Full Screen must be engaged

function lock (orientation){
  let de = document.documentElement;
  if(de.requestFullscreen){ de.requestFullscreen(); }
  else if (de.mozRequestFullScreen){de.mozRequestFullScreen();}
  else if (de.webkitRequestFullscreen){de.webkitRequestFullscreen();}
  else if (de.msRequestFullscreen){de.msRequestFullscreen();}
  screen.orientation.lock(orientation); 
}
