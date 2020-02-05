'use strict';

var dom = {
  wizardsTemplate: document.querySelector('#similar-wizard-template'),
  setupTemplate: document.querySelector('.setup-similar-list'),
  setupBlock: document.querySelector('.setup-similar'),
  setup: document.querySelector('.setup'),
  setupOpen: document.querySelector('.setup-open'),
  setupClose: document.querySelector('.setup-close'),
  setupOpenIcon: document.querySelector('.setup-open-icon'),
  setupUserName: document.querySelector('.setup-user-name'),
  wizardCoat: document.querySelector('.setup-wizard .wizard-coat'),
  wizardEyes: document.querySelector('.setup-wizard .wizard-eyes'),
  fireballWrap: document.querySelector('.setup-fireball-wrap'),
};

var WizzardOptions = [];

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

// Функция получения случайного целого числа в заданном интервале. Максимум и минимум включаются
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 1; i < 5; i++) {
  var namePart = names[getRandomIntInclusive(0, 7)];
  var secondNamePart = secondNames[getRandomIntInclusive(0, 7)];
  WizzardOptions.push({
    name: namePart + ' ' + secondNamePart,
    coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
  });
}

var renderWizard = function (wizards, templateNode) {
  var wizardElement = templateNode.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < WizzardOptions.length; k++) {
  fragment.appendChild(renderWizard(WizzardOptions[k], dom.wizardsTemplate.content));
}

dom.setupTemplate.appendChild(fragment);

dom.setupBlock.classList.remove('hidden');

var setupOpenClickHandler = function () {
  dom.setup.classList.remove('hidden');
};

var setupOpenIconKeydownHandler = function (evt) {
  if (evt.key === 'Enter') {
    dom.setup.classList.remove('hidden');
  }
};

var setupCloseClickHandler = function () {
  dom.setup.classList.add('hidden');
};

var setupCloseKeydownEnterHandler = function (evt) {
  if (evt.key === 'Enter') {
    dom.setup.classList.add('hidden');
  }
};

var setupCloseKeydownHandler = function (evt) {
  if (evt.key === 'Escape') {
    dom.setup.classList.add('hidden');
  }
};

var setupUserNameKeydownHandler = function (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

var wizardCoatClickHandler = function () {
  dom.wizardCoat.style.fill = coatColors[getRandomIntInclusive(0, coatColors.length - 1)];
};

var wizardEyesClickHandler = function () {
  dom.wizardEyes.style.fill = eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)];
};

var fireballWrapClickHandler = function () {
  var fireballColor = fireballColors[getRandomIntInclusive(0, fireballColors.length - 1)];
  dom.fireballWrap.style.backgroundColor = fireballColor;
  dom.fireballWrap.querySelector('input').value = fireballColor;
};

document.addEventListener('keydown', setupCloseKeydownHandler); // Esc закрывает форму

dom.setupOpen.addEventListener('click', setupOpenClickHandler); // Открываю форму по иконке
dom.setupOpenIcon.addEventListener('keydown', setupOpenIconKeydownHandler); // По Enter открываю форму

dom.setupClose.addEventListener('click', setupCloseClickHandler); // Закрываю форму на крестике
dom.setupClose.addEventListener('keydown', setupCloseKeydownEnterHandler); // По Enter на крестике закрываю форму

dom.setupUserName.addEventListener('keydown', setupUserNameKeydownHandler); // Esc не закрыват форму на поле ввода

dom.wizardCoat.addEventListener('click', wizardCoatClickHandler); // Меняю цвет плаща по клику
dom.wizardEyes.addEventListener('click', wizardEyesClickHandler); // Меняю цвет глаз по клику
dom.fireballWrap.addEventListener('click', fireballWrapClickHandler); // Меняю цвет файрбола по клику
