let doorImage1 = document.getElementById("door1");
const dudDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const door1Click = () => {
  doorImage1.src = dudDoorPath;
};

doorImage1.onclick = door1Click;
