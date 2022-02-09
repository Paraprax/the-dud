let doorImg1 = document.getElementById("door1");
let doorImg2 = document.getElementById("door2");
let doorImg3 = document.getElementById("door3");
let openDoor1;
let openDoor2;
let openDoor3;
let numOfClosedDoors = 3;
const closedDoorPath = "https://i.imgur.com/niZAX8c.png";
const dudDoorPath = "https://i.imgur.com/ADa7c0z.png";
const qDoorPath = "assets/images/right-door.png";
const playButton = document.getElementById("playButton");

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
  console.log("doorRandomizer called");
};

const isDud = (door) => {
  if (door.src = ) {
    
  } else {

  }
}

const isOpen = (door) => {
  //if the door's src image is currently the closed door:
  if (door.src == closedDoorPath) {
    console.log(door.src);
    console.log("isOpen returned false");
    return false;
  } else {
    //if it's any other image:
    console.log(door.src);
    console.log("isOpen returned true");
    return true;
  }
};

const door1Click = () => {
  if (!isOpen(doorImg1)) {
    doorImg1.src = openDoor1;
    doorCounter();
  }
};

const door2Click = () => {
  if (!isOpen(doorImg2)) {
    doorImg2.src = openDoor2;
    doorCounter();
  }
};

const door3Click = () => {
  if (!isOpen(doorImg3)) {
    doorImg3.src = openDoor3;
    doorCounter();
  }
};
const doorCounter = () => {
  numOfClosedDoors -= 1;
  if (numOfClosedDoors === 1) {
    endGame("win");
  }
};

//click events:
doorImg1.onclick = door1Click;
doorImg2.onclick = door2Click;
doorImg3.onclick = door3Click;

//outcome:
const endGame = (gameStatus) => {
  if (gameStatus == "win") {
    playButton.innerHTML = "Play again?";
  } else {
  }
};

doorRandomizer();
