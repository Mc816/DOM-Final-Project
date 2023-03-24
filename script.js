//Class -1
class BabyYoda {
  constructor(name, happines, tiredness) {
    this.name = name;
    this.happines = happines;
    this.tiredness = tiredness;
  }
}

//Class -2
class Doggie {
  constructor(name, happy, scared, hungry) {
    this.name = name;
    this.happy = happy;
    this.scared = scared;
    this.hungry = hungry;
  }
}

const babaYoda = new BabyYoda("Baby Yoda", "happy", "tired");

const pullto = new Doggie("Pulto", "happy", "scared", "full");

const imgButton1 = document.getElementById("button1");
const myImage1 = document.getElementById("img1");
const pTag = document.querySelector(".p2");
const link = document.getElementById("popupbttn");
const linkBttn = document.querySelector("#nextbtn");
//Object 1 containing text for specific html page
const text = {
  "/pages/page1.html": `Baby Yoda is super ${babaYoda.happines}`,
  "/pages/page4.html": `You made ${pullto.name} so ${babaYoda.happines}`,
  "/pages/page8.html": `Wow that made ${babaYoda.name} so ${babaYoda.tiredness}`,
};
//Object 2 containing text for specific html page
const text2 = {
  "/pages/page1.html": `${babaYoda.name} had so much fun on Space Mountain`,
  "/pages/page7.html": `${pullto.name} is ${pullto.hungry}`,
  "/pages/page5.html": `That ride made ${pullto.name} ${pullto.scared}`,
};
//addEventListener 1 to allow first imgBttn to be clickable
imgButton1.addEventListener("click", () => {
  let url = window.location.pathname;
  linkBttn.className = "";
  myImage1.className = "";

  if (linkBttn2 === null) {
    linkBttn.className = "";
  } else {
    linkBttn2.className = "disable";
    linkBttn.className = "";
  }

  myImage2.className = "disable";

  pTag.textContent = text[url];
  pTag.className = "";
  pTag.style.color = "gray";
  pTag.style.fontSize = "55px";
  pTag.style.fontWeight = "bold";
});

const imgButton2 = document.getElementById("button2");
const myImage2 = document.getElementById("img2");
const linkBttn2 = document.querySelector("#nextbtn2");
//addEventListner 2 - to allow second imagebttn to be clickable
imgButton2.addEventListener("click", () => {
  linkBttn.className = "none";
  myImage1.className = "none";

  let url = window.location.pathname;
  myImage2.className = "";

  if (linkBttn2 === null) {
    linkBttn.className = "";
  } else {
    linkBttn.className = "disable";
    linkBttn2.className = "";
  }

  pTag.textContent = text2[url];
  pTag.className = "";
  pTag.style.color = "gray";
  pTag.style.fontSize = "40px";
  pTag.style.fontSize = "bold";
});
