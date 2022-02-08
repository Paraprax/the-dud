let doorImg1 = document.getElementById("door1");
let doorImg2 = document.getElementById("door2");
let doorImg3 = document.getElementById("door3");
const dudDoorPath = "assets/images/wrong-door.png";
const qDoorPath = "assets/images/right-door.png";

const door1Click = () => {
  doorImg1.src = dudDoorPath;
};

const door2Click = () => {
  doorImg1.src = dudDoorPath;
};

doorImg1.onclick = door1Click;
