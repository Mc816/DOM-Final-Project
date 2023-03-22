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
//console.log(babaYoda);
const pullto = new Doggie("Sad", "mad", "angry");

//put if else statments based on the button clicked

//Maybe loop through it and
//First image button

const imgButton1 = document.getElementById("button1");
const myImage1 = document.getElementById("img1");
imgButton1.addEventListener("click", () => {
  myImage1.classList.toggle("none");

  imgButton1.textContent = <p>`Baby Yoda is super ${this.happines}`</p>;
  // const pEl = document.getElementById("p1");
  /*pEl.innerHTML = `Baby Yoda is ${this.happines}`;
  pEl.classList.toggle("p1"); */ // not selected to a click or event so it shows up but doesnt
});

const imgButton2 = document.getElementById("button2");
const myImage2 = document.getElementById("img2");
imgButton2.addEventListener("click", () => {
  myImage2.classList.toggle("none");
});
