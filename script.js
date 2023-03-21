class BabyYoda {
  constructor(happines, tiredness, hungry) {
    this.happines = happines;
    this.tiredness = tiredness;
    this.hungry = hungry;
  }
}

class Doggie {
  constructor(happines, tiredness, hungry) {
    this.happines = happines;
    this.color = tiredness;
    this.hungry = hungry;
  }
}

const babaYoda = new BabyYoda("happy", "tired", "you");
const pullto = new Doggie("Sad", "mad", "angry");

//put if else statments based on the button clicked

//Maybe loop through it and
//First image button

const imgButton1 = document.getElementById("button1");
const myImage1 = document.getElementById("img1");
imgButton1.addEventListener("click", () => {
  myImage1.classList.toggle("img1");
});

function yodaFeelings() {
  if (imgButton1.clicked === true) {
    console.log(`Baby Yoda is ${this.happines}`);
    //yodaHappy.textContent;
  }
}
//Second image button

const imgButton2 = document.getElementById("button2");
const myImage2 = document.getElementById("img2");
imgButton2.addEventListener("click", () => {
  myImage2.classList.toggle("img2");
});

//Third image button

const imgButton3 = document.getElementById("button3");
const theImage3 = document.getElementById("img3");
imgButton3.addEventListener("click", () => {
  theImage3.classList.toggle("image3");
});

//Fourth image button
const imgButton4 = document.getElementById("button4");
const theImage4 = document.getElementById("img4");
imgButton4.addEventListener("click", () => {
  theImage4.classList.toggle("image4");
});

//5th image button
const imgButton5 = document.getElementById("button5");
const theImage5 = document.getElementById("img5");
imgButton5.addEventListener("click", () => {
  theImage5.classList.toggle("image5");
});

//6th Imgage
const imgButton6 = document.getElementById("button6");
const theImage6 = document.getElementById("img6");
imgButton6.addEventListener("click", () => {
  theImage6.classList.toggle("image6");
});

//7th Image
const imgButton7 = document.getElementById("button7");
const theImage7 = document.getElementById("img7");
imgButton7.addEventListener("click", () => {
  theImage7.classList.toggle("image7");
});

//8th Image
const imgButton8 = document.getElementById("button8");
const theImage8 = document.getElementById("img8");
imgButton8.addEventListener("click", () => {
  theImage8.classList.toggle("image8");
});

//9th button
const imgButton9 = document.getElementById("button9");
const theImage9 = document.getElementById("img9");
imgButton9.addEventListener("click", () => {
  theImage9.classList.toggle("image9");
});

//10th button
const imgButton10 = document.getElementById("button10");
const theImage10 = document.getElementById("img10");
imgButton10.addEventListener("click", () => {
  theImage10.classList.toggle("image10");
});

//11th image button
const imgButton11 = document.getElementById("button11");
const theImage11 = document.getElementById("img11");
imgButton11.addEventListener("click", () => {
  theImage11.classList.toggle("image11");
});

//12 image buton
const imgButton12 = document.getElementById("button12");
const theImage12 = document.getElementById("img12");
imgButton12.addEventListener("click", () => {
  theImage12.classList.toggle("image12");
});
