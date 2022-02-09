const doorImg1 = document.getElementById("door1");
const doorImg2 = document.getElementById("door2");
const doorImg3 = document.getElementById("door3");
const closedDoorPath = "https://i.imgur.com/niZAX8c.png";
const dudDoorPath = "https://i.imgur.com/ADa7c0z.png";
const qDoorPath = "assets/images/right-door.png";
const playButton = document.getElementById("playButton");
let openDoor1;
let openDoor2;
let openDoor3;
let numOfClosedDoors = 3;
let activeRound = true;

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
  if (door.src == dudDoorPath) {
    return true;
  } else {
    return false;
  }
};

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

const doorCounter = (door) => {
  numOfClosedDoors -= 1;
  if (numOfClosedDoors === 1 && isDud(door) == false) {
    endGame("win");
  } else if (isDud(door) == true) {
    endGame();
  }
};

//functions called by onClick events:
const door1Click = () => {
  if (!isOpen(doorImg1) && activeRound) {
    doorImg1.src = openDoor1;
    doorCounter(doorImg1);
  }
};

const door2Click = () => {
  if (!isOpen(doorImg2) && activeRound) {
    doorImg2.src = openDoor2;
    doorCounter(doorImg2);
  }
};

const door3Click = () => {
  if (!isOpen(doorImg3) && activeRound) {
    doorImg3.src = openDoor3;
    doorCounter(doorImg3);
  }
};

const startRound = () => {
  playButton.innerHTML = "Choose a door";
  //reset gameplay values:
  doorImg1.src = closedDoorPath;
  doorImg2.src = closedDoorPath;
  doorImg3.src = closedDoorPath;
  numOfClosedDoors = 3;
  activeRound = true;
  doorRandomizer();
};

//click pairings:
doorImg1.onclick = door1Click;
doorImg2.onclick = door2Click;
doorImg3.onclick = door3Click;
playButton.onclick = startRound;

//outcome:
const endGame = (gameStatus) => {
  if (gameStatus == "win") {
    playButton.innerHTML = "Next round";
    activeRound = false;
  } else {
    playButton.innerHTML = "Game over!";
    activeRound = false;
  }
};

doorRandomizer();
