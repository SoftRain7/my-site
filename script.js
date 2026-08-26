document.addEventListener('DOMContentLoaded', function() {
  var angryMom = document.getElementById('angryMom');
  var blackScreen = document.getElementById('blackScreen');

  angryMom.addEventListener('click', function() {
    blackScreen.classList.add('show');
  });

  blackScreen.addEventListener('click', function() {
    blackScreen.classList.remove('show');
  });
});