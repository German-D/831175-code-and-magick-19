'use strict';

(function () {
  // Функция получения случайного целого числа в заданном интервале. Максимум и минимум включаются
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // Создаю «Похожих персонажей»
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

  var secondNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var WizzardOptions = [];

  for (var i = 1; i < 5; i++) {
    var namePart = names[getRandomIntInclusive(0, 7)];
    var secondNamePart = secondNames[getRandomIntInclusive(0, 7)];
    WizzardOptions.push({
      name: namePart + ' ' + secondNamePart,
      coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
      eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
    });
  }


  // Меняю цвет плаща по клику
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardAppearance = document.querySelectorAll('.setup-wizard-appearance input');

  var wizardCoatClickHandler = function () {
    var coatColorsRandom = coatColors[getRandomIntInclusive(0, coatColors.length - 1)];
    wizardCoat.style.fill = coatColorsRandom;
    setupWizardAppearance[0].value = coatColorsRandom;
  };

  wizardCoat.addEventListener('click', wizardCoatClickHandler);


  // Меняю цвет глаз по клику
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  var wizardEyesClickHandler = function () {
    var eyesColorsRandom = eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)];
    wizardEyes.style.fill = eyesColorsRandom;
    setupWizardAppearance[1].value = eyesColorsRandom;
  };

  wizardEyes.addEventListener('click', wizardEyesClickHandler);


  // Меняю цвет файрбола по клику
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

  var fireballWrapClickHandler = function () {
    var fireballColor = fireballColors[getRandomIntInclusive(0, fireballColors.length - 1)];
    fireballWrap.style.backgroundColor = fireballColor;
    fireballWrap.querySelector('input').value = fireballColor;
  };

  fireballWrap.addEventListener('click', fireballWrapClickHandler);
})();
