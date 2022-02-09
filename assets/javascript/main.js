let doorImg1 = document.getElementById("door1");
let doorImg2 = document.getElementById("door2");
let doorImg3 = document.getElementById("door3");
let openDoor1;
let openDoor2;
let openDoor3;
let numOfClosedDoors = 3;
const dudDoorPath = "assets/images/wrong-door.png";
const qDoorPath = "assets/images/right-door.png";

const door1Click = () => {
  doorImg1.src = dudDoorPath;
};
const door2Click = () => {
  doorImg2.src = qDoorPath;
};
const door3Click = () => {
  doorImg3.src = qDoorPath;
};

const doorRandomizer = () => {
  let wrongDoor = Math.floor(Math.random() * numOfClosedDoors + 1);
  console.log(wrongDoor);

  if (wrongDoor == 1) {
    openDoor1 = dudDoorPath;
    openDoor2 = qDoorPath;
    openDoor3 = qDoorPath;
  } else if (wrongDoor == 2) {
    openDoor2 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor3 = qDoorPath;
  } else {
    openDoor3 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor2 = qDoorPath;
  }
};

//click events:
doorImg1.onclick = door1Click;
doorImg2.onclick = door2Click;
doorImg3.onclick = door3Click;

doorRandomizer();
