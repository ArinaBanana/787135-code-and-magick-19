var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var gistWidth = 40;
var gistHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var renderGist = function () {

};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');
  renderText(ctx, 'Ура вы победили!', 130, 40, '#000000');
  renderText(ctx, 'Список результатов:', 130, 60, '#000000');
};
