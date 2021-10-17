// Declare Variables
let output = document.querySelector('#output');
let functionalButton = document.querySelector('#function-button');
let objectButton = document.querySelector('#object-button');

// Change background-color using functional programming [6 lines]
functionalButton.addEventListener('click', function () {
  toBlue();
});

function toBlue() {
  output.style.background = 'blue';
}

// Change background-color using classes [11 lines]
class toGreen {
  constructor(color) {
    this.color = color;
  }

  backgroundToGreen() {
    return this.color;
  }
}

let colorInstance = new toGreen('green');

objectButton.addEventListener('click', function () {
  output.style.background = colorInstance.backgroundToGreen();
});
