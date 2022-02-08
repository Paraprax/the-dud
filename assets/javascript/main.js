let doorImage1 = document.getElementById("door1");
const dudDoorPath = "assets/images/wrong-door.png";

const door1Click = () => {
  doorImage1.src = dudDoorPath;
};

doorImage1.onclick = door1Click;
