'use strict';

var wizardsTemplate = document.querySelector('#similar-wizard-template').content;
var setupTemplate = document.querySelector('.setup-similar-list');
var setupBlock = document.querySelector('.setup-similar');

var newBlock = document.querySelector('.setup');
newBlock.classList.remove('hidden');

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
  'Ирвинг'
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
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)]
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
  fragment.appendChild(renderWizard(WizzardOptions[k], wizardsTemplate));
}

setupTemplate.appendChild(fragment);

setupBlock.classList.remove('hidden');
