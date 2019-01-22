 var myImage = document.querySelector('img');

 myImage.onclick = function () {
   var mySrc = myImage.getAttribute('src');
   if (mySrc === 'images/myhc_.jpg') {
     myImage.setAttribute('src','images/ny.jpg');
   } else {
     myImage.setAttribute('src','images/myhc_.jpg');
   }
 }
 var myButton = document.querySelector('button');
 var myHeading = document.querySelector('h1');
 function setUserName() {
   var myName = prompt('Введите ваше имя.');
   localStorage.setItem('name', myName);
   myHeading.innerHTML  = 'NY is cool, ' + myName;
 }
 if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'NY is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
