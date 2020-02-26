'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var characters = document.querySelector('.setup');
var similarCharacters = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (a, b) {
  return Math.floor(Math.random() * (b - a) + a);
};

var getRandomName = function (names, surnames) {
  var nameIndex = getRandomNumber(0, names.length);
  var surnameIndex = getRandomNumber(0, surnames.length);

  return names[nameIndex] + ' ' + surnames[surnameIndex];
};

var getRandomCoatColor = function (coats) {
  var coatIndex = getRandomNumber(0, coats.length);

  return coats[coatIndex];
};

var getRandomEyesColor = function (eyes) {
  var eyesIndex = getRandomNumber(0, eyes.length);

  return eyes[eyesIndex];
};

var getWizard = function () {
  var wizard = {
    name: getRandomName(NAMES, SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLORS),
    eyesColor: getRandomEyesColor(EYES_COLORS),
  };

  return wizard;
};

var getRandomWizards = function () {
  var wizards = [];

  for (var j = 0; j < 4; j++) {
    wizards.push(getWizard());
  }

  return wizards;
};

var getCreateWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  var nameElement = wizardElement.querySelector('.setup-similar-label');
  nameElement.textContent = wizard.name;

  var coatElement = wizardElement.querySelector('.wizard-coat');
  coatElement.style.fill = wizard.coatColor;

  var eyesElement = wizardElement.querySelector('.wizard-eyes');
  eyesElement.style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizardList) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardList.length; i++) {
    var wizard = wizardList[i];
    var wizardElement = getCreateWizardElement(wizard);
    fragment.appendChild(wizardElement);
  }

  similarList.appendChild(fragment);
};

var wizards = getRandomWizards();
renderWizards(wizards);

characters.classList.remove('hidden');
similarCharacters.classList.remove('hidden');
