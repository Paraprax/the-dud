const doorImg1 = document.getElementById("door1");
const doorImg2 = document.getElementById("door2");
const doorImg3 = document.getElementById("door3");
const doorImg4 = document.getElementById("door4");
const doorImg5 = document.getElementById("door5");
const barredDoorPath = "https://i.imgur.com/1DBre5k.png";
const closedDoorPath = "https://i.imgur.com/p3J7taH.png";
const dudDoorPath = "https://i.imgur.com/ADa7c0z.png";
const qDoorPath = "https://i.imgur.com/mJGVU5p.png";
const playButton = document.getElementById("playButton");
const buttonInnerText = document.getElementById("buttonText");
const statusMessage = document.getElementById("status-message");
const streakMessage = document.getElementById("streak-message");
const streakCount = document.getElementById("streak-count");
const blinkingArrow = document.getElementById("arrow");
let countNumber = 0;
let openDoor1;
let openDoor2;
let openDoor3;
let openDoor4;
let openDoor5;
let numOfClosedDoors = 5;
let activeRound = true;
//changes only once after pageload:
let gameStarted = false;

doorImg1.src = barredDoorPath;
doorImg2.src = barredDoorPath;
doorImg3.src = barredDoorPath;
doorImg4.src = barredDoorPath;
doorImg5.src = barredDoorPath;

const doorRandomizer = () => {
  // console.log(numOfClosedDoors);
  let wrongDoor = Math.floor(Math.random() * numOfClosedDoors + 1);
  console.log(`For devs or cheaters: ${wrongDoor}`);

  if (wrongDoor == 1) {
    openDoor1 = dudDoorPath;
    openDoor2 = qDoorPath;
    openDoor3 = qDoorPath;
    openDoor4 = qDoorPath;
    openDoor5 = qDoorPath;
  } else if (wrongDoor == 2) {
    openDoor2 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor3 = qDoorPath;
    openDoor4 = qDoorPath;
    openDoor5 = qDoorPath;
  } else if (wrongDoor == 3) {
    openDoor3 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor2 = qDoorPath;
    openDoor4 = qDoorPath;
    openDoor5 = qDoorPath;
  } else if (wrongDoor == 4) {
    openDoor4 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor2 = qDoorPath;
    openDoor3 = qDoorPath;
    openDoor5 = qDoorPath;
  } else {
    openDoor5 = dudDoorPath;
    openDoor1 = qDoorPath;
    openDoor2 = qDoorPath;
    openDoor3 = qDoorPath;
    openDoor4 = qDoorPath;
  }
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
    return false;
  } else {
    //if it's any other image:
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

//functions called by onClick events: --------------
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
const door4Click = () => {
  if (!isOpen(doorImg4) && activeRound) {
    doorImg4.src = openDoor4;
    doorCounter(doorImg4);
  }
};
const door5Click = () => {
  if (!isOpen(doorImg5) && activeRound) {
    doorImg5.src = openDoor5;
    doorCounter(doorImg5);
  }
};
// --------------

const startRound = () => {
  statusMessage.innerHTML = "Choose A Door";
  streakMessage.innerHTML = "Winning Streak: ";
  streakCount.innerHTML = countNumber;
  //reset TV colours:
  statusMessage.style.color = "rgb(102, 255, 47)";
  document.getElementById("tv-2-background").style.backgroundColor = "rgb(0, 6, 2)";
  //reset gameplay values:
  resetDoors();
  numOfClosedDoors = 5;
  activeRound = true;
  doorRandomizer();
};

const resetDoors = () => {
  if (gameStarted) {
    blinkingArrow.style.display = "block";
    doorImg1.src = closedDoorPath;
    doorImg2.src = closedDoorPath;
    doorImg3.src = closedDoorPath;
    doorImg4.src = closedDoorPath;
    doorImg5.src = closedDoorPath;
  }
};

//outcome:
const endGame = (gameStatus) => {
  if (gameStatus == "win") {
    activeRound = false;
    countNumber += 1;
    streakCount.innerHTML = countNumber;
    playButton.style.backgroundColor = "black";
    playButton.innerHTML = "Next round";
    playButton.style.borderTopWidth = "0px";
    playButton.style.borderBottomWidth = "3px";
  } else {
    activeRound = false;
    countNumber = 0;
    playButton.style.backgroundColor = "black";
    playButton.innerHTML = "New Game";
    playButton.style.borderTopWidth = "0px";
    playButton.style.borderBottomWidth = "3px";
    statusMessage.innerHTML = "GAME OVER";
    blinkingArrow.style.display = "none";
    statusMessage.style.color = "rgb(255, 204, 0)";
    document.getElementById("tv-2-background").style.backgroundColor = "red";
  }
};

//click pairings:
doorImg1.onclick = door1Click;
doorImg2.onclick = door2Click;
doorImg3.onclick = door3Click;
doorImg4.onclick = door4Click;
doorImg5.onclick = door5Click;
playButton.onclick = () => {
  if (!gameStarted) {
    //unbars doors on first round of refresh only
    playButton.innerHTML = " ";
    playButton.style.borderTopWidth = "3px";
    playButton.style.borderBottomWidth = "0px";
    playButton.style.backgroundColor = "rgb(31,31,31)";
    gameStarted = true;
    doorImg1.src = closedDoorPath;
    doorImg2.src = closedDoorPath;
    doorImg3.src = closedDoorPath;
    doorImg4.src = closedDoorPath;
    doorImg5.src = closedDoorPath;
    //turn on TV text:
    statusMessage.style.display = "block";
    streakMessage.style.display = "block";
    streakCount.style.display = "block";
    blinkingArrow.style.display = "block";
  }
  if (!activeRound) {
    playButton.innerHTML = " ";
    playButton.style.borderTopWidth = "3px";
    playButton.style.borderBottomWidth = "0px";
    playButton.style.backgroundColor = "rgb(31,31,31)";
    streakCount.innerHTML = countNumber;
    startRound();
  }
};

startRound();

//blinking arrow logic:
let arrow = true;
var speed = 1000;
setInterval(() => {
  if (arrow) {
    document.getElementById("arrow").style.opacity = 0;
    arrow = false;
  } else {
    document.getElementById("arrow").style.opacity = 1;
    arrow = true;
  }
}, speed);

//blinking button-text logic
let buttonText = true;
var speed = 900;
setInterval(() => {
  if (buttonText) {
    buttonInnerText.style.opacity = 0;
    buttonText = false;
  } else {
    buttonInnerText.style.opacity = 1;
    buttonText = true;
  }
}, speed);
