console.log(window.location.href);

class BabyYoda {
  constructor(happines, tiredness) {
    this.happines = happines;
    this.tiredness = tiredness;
  }
}

class Doggie {
  constructor(happy, sleepy, hungry) {
    this.happy = happy;
    this.sleepy = sleepy;
    this.hungry = hungry;
  }
}

const babaYoda = new BabyYoda("happy", "tired");
console.log(babaYoda.happines);
const pullto = new Doggie("Sad", "mad", 6);

//put if else statments based on the button clicked

//Maybe loop through it and
//First image button

//const pEl = document.createdElement("p");

//if statment here for the picuteres

const imgButton1 = document.getElementById("button1");
const myImage1 = document.getElementById("img1");
const pTag = document.querySelector(".p2");
//const pTag2 = document.querySelector(".p2");
const link = document.getElementById("popupbttn");
const linkBttn = document.querySelector("#nextbtn");
//const clicked = true;
const text = {
  "/pages/page1.html": `Baby Yoda is Super ${babaYoda.happines}`,
  "/pages/page4.html": `This is page 4${babaYoda.happines}`,
};

const text2 = {
  "/pages/page1.html": `baby yoda`,
};
imgButton1.addEventListener("click", () => {
  let url = window.location.pathname;
  linkBttn.className = "";
  myImage1.className = "";

  if (linkBttn2 === null) {
    //make sure there are no other classes in the class nsme
    linkBttn.className = "";
  } else {
    linkBttn2.className = "disable";
    linkBttn.className = "";
  }

  myImage2.className = "disable"; //Changing the class on both event listners, but they do oppiste things
  //imgButton1.classList.toggle("noBttn");
  pTag.textContent = text[url];
  pTag.className = "";
});

const imgButton2 = document.getElementById("button2");
const pTag3 = document.querySelector(".gone2");
const myImage2 = document.getElementById("img2");
const linkBttn2 = document.querySelector("#nextbtn2");
imgButton2.addEventListener("click", () => {
  linkBttn.className = "none";
  myImage1.className = "none";

  let url = window.location.pathname;
  myImage2.className = "";
  //I need to fix the issue with the other qoute pop-ing up
  if (linkBttn2 === null) {
    //make sure there are no other classes in the class nsme
    linkBttn.className = "";
  } else {
    linkBttn.className = "disable";
    linkBttn2.className = "";
  }

  pTag3.textContent = `Baby Yoda is Super ${babaYoda.tiredness} he is ready to go to bed`; //class for baby yoda going to be
  pTag3.classList.toggle("gone2");
});
/*
imgButton1.addEventListener("Click");

$("#button1").click(function () {
  ev.preventDefault();
  $("#popupbttn").removeClass("popupbttn1");
  $("#popupbttn1").addClass("popupbttn1");
});
/* Might be able to use this 
imgButton1.addEventListener("click", () => {
  return link.classList.toggle("linkclass");
});
*/

// pTag.classList.toggle("gone");

// pTag2.textContent = `Pulto food level is ${pullto.hungry} `;
// pTag2.classList.toggle("p2");

/*if (imgButton1 === clicked) {
    imgButton2.classList.remove("noBttn");
  }*/
/*
const link = document.getElementById("link");
function linkForAllLinks() {
  if(displayValue = "")
  link.style.display === "";
  displayValue = "none";

  link.style.display = displayValue;
}

if (imgButton1 === true) {
}
*/
//imgButton1.addEventListener("click");
//pTag.classList.toggle("gone");
//,{ once: true }

/*
function rest() {
  var url = document.getElementById("mainUrl").value;
  document.write("Going back");
  setTimeout(function () {
    window.location = mainUrl;
  }, 3000);
}

rest(url);
*/
