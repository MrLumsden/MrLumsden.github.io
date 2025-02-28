const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bmw4.jpg") {
    myImage.setAttribute("src", "images/bmw3.jpg");
  } else {
    myImage.setAttribute("src", "images/bmw4.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Live Your Life, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Live Your Life, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
