'use strict';

(function () {
// Открываю форму по иконке
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');

  var setupOpenClickHandler = function () {
    setup.classList.remove('hidden');
  };

  setupOpen.addEventListener('click', setupOpenClickHandler);


  // По Enter открываю форму
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  var setupOpenIconKeydownHandler = function (evt) {
    if (evt.key === 'Enter') {
      setup.classList.remove('hidden');
    }
  };

  setupOpenIcon.addEventListener('keydown', setupOpenIconKeydownHandler);


  // Закрываю форму на крестике
  var setupClose = document.querySelector('.setup-close');

  var setupCloseClickHandler = function () {
    setup.classList.add('hidden');
  };

  setupClose.addEventListener('click', setupCloseClickHandler);


  // По Enter на крестике закрываю форму
  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.key === 'Enter') {
      setup.classList.add('hidden');
    }
  };

  setupClose.addEventListener('keydown', setupCloseKeydownEnterHandler);

  // Esc закрывает форму
  var setupCloseKeydownHandler = function (evt) {
    if (evt.key === 'Escape') {
      setup.classList.add('hidden');
    }
  };

  document.addEventListener('keydown', setupCloseKeydownHandler);


  // Esc не закрыват форму на поле ввода
  var setupUserName = document.querySelector('.setup-user-name');

  var setupUserNameKeydownHandler = function (evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  };

  setupUserName.addEventListener('keydown', setupUserNameKeydownHandler);

  window.utils = setup;
})();
