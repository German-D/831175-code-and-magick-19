'use strict';

function renderStatistics(ctx, names, times) {
  var shadowCoordinate = 10; // Смещение подложки относительно белого прямоугольника
  var CLOUD_X = 100; // Координата отрисовк облака
  var CLOUD_Y = 10; // Координата отрисовк облака
  var CLOUD_WIDTH = 500; // Ширина облака
  var CLOUD_HEIGHT = 270; // Высота облака
  var NAMES_HEIGHT = 255; // Высота на которой вывожу имена
  var GAP_WIDTH = 100; // Расстояние между стобцами
  var COLUMN_WIDTH = 50; // Ширина столбца
  var RESULT_HEIGHT = 90; // Высота результатов в цифрах
  var maxTime = Math.max(times[0], times[1], times[2], times[3]); // Нахожу максимальное время в массиве
  var maxHeightStatistic = NAMES_HEIGHT - 100; // Максимальная высота столбца
  var proportion = maxHeightStatistic / maxTime; // Переменная для пропорции
  var randomNumber99;
  var i;

  // Функция для отрисовки облачка с подложкой
  function renderCloud(context, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  // Вызываю функцию отрисовки облачка с подложкой
  renderCloud(ctx, CLOUD_X + shadowCoordinate, CLOUD_Y + shadowCoordinate, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  // Пишу текст «Ура, вы победили!»
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // Пишу имена
  for (i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + COLUMN_WIDTH + GAP_WIDTH * i, NAMES_HEIGHT);
  }

  // Пишу значение времени + округляю до целого
  for (i = 0; i < times.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_WIDTH + i * GAP_WIDTH, RESULT_HEIGHT);
  }

  // Отрисовываю прогресс времени
  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = '#f00';
      ctx.fillRect(CLOUD_X + COLUMN_WIDTH + i * GAP_WIDTH, NAMES_HEIGHT - times[i] * proportion, COLUMN_WIDTH, times[i] * proportion - 25);

    } else {
      randomNumber99 = Math.floor(Math.random() * 100);
      ctx.fillStyle = 'hsl(240,100%,' + randomNumber99 + '%)';
      ctx.fillRect(CLOUD_X + COLUMN_WIDTH + i * GAP_WIDTH, NAMES_HEIGHT - times[i] * proportion, COLUMN_WIDTH, times[i] * proportion - 25);
    }
  }
}

window.renderStatistics = renderStatistics;
