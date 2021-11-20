let inputArr = [];
inputArr.push(document.querySelectorAll('.form-control input'));
inputArr.push(document.querySelectorAll('.form-control textarea'));

// inputArr.forEach((e) => {
//   document.querySelectorAll('.form-control input').addEventListener('keyup', function () {
//     this.value.length > 0 ? (this.style.background = 'green') : (this.style.background = 'red');
//   });
// });

document.querySelector('.form-control input').addEventListener('keyup', function () {
  this.value.length > 3 ? (this.style.borderColor = 'green') : this.value.length === 0 ? (this.style.borderColor = 'none') : (this.style.borderColor = 'red');
});

document.querySelector('.form-control input').addEventListener('', function () {
  this.style.borderColor = 'none';
});
