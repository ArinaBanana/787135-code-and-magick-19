var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var PADDING = 50;
var MARGIN = 10;
var TEXT_TITLE_X = 130;
var TEXT_TITLE_Y = 40;
var LINE_HEIGHT = 20;

var columnWidth = 40;
var maxColumnHeight = 150;

var columnY = 90;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var renderGist = function (ctx, x, y, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, columnWidth, height);
};

var getMaxValue = function (values) {
  var max = values[0];

  for (var i = 1; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }

  return max;
};

var getRandomPlayerColor = function () {
  var randomNumber = Math.floor(Math.random() * 100);
  var percent = randomNumber + '%';

  return 'hsl(240,' + percent + ' , 50%)';
};

var getPlayerColor = function (isMe) {
  var color;
  if (isMe) {
    color = 'rgba(255, 0, 0, 1)';
  } else {
    color = getRandomPlayerColor();
  }

  return color;
};

var renderPlayerChart = function (ctx, name, time, height, x, color) {
  var gistMarginTop = maxColumnHeight - height;
  var currentGistY = columnY + gistMarginTop;

  renderText(ctx, Math.round(time), x, currentGistY - MARGIN, '#000000');
  renderGist(ctx, x, currentGistY, height, color);
  renderText(ctx, name, x,currentGistY + height + LINE_HEIGHT, '#000000');
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + MARGIN, CLOUD_Y + MARGIN, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, 'Ура вы победили!', TEXT_TITLE_X, TEXT_TITLE_Y, '#000000');
  renderText(ctx, 'Список результатов:', TEXT_TITLE_X, TEXT_TITLE_Y + LINE_HEIGHT, '#000000');

  var maxTime = getMaxValue(times);

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var isMe = name === 'Вы';
    var color = getPlayerColor(isMe);
    var currentGistHeight = time * maxColumnHeight / maxTime;
    var currentGistX = CLOUD_X + ((columnWidth + PADDING) * i) + PADDING;

    renderPlayerChart(ctx, name, time, currentGistHeight, currentGistX, color);
  }
};
