'use strict';

function renderStatistics(ctx, names, times) {
  var SHADOW_COORDINATE = 10; // Смещение подложки относительно белого прямоугольника
  var CLOUD_X = 100; // Координата отрисовк облака
  var CLOUD_Y = 10; // Координата отрисовк облака
  var CLOUD_WIDTH = 500; // Ширина облака
  var CLOUD_HEIGHT = 270; // Высота облака
  var NAMES_HEIGHT = 255; // Высота на которой вывожу имена
  var GAP_WIDTH = 100; // Расстояние между стобцами
  var COLUMN_WIDTH = 50; // Ширина столбца
  var RESULT_HEIGHT = 90; // Высота результатов в цифрах
  var maxHeightStatistic = NAMES_HEIGHT - 100; // Максимальная высота столбца
  var maxTime = getMaxOfArray(times); // Получаю максимальное значение из массива
  var proportion = maxHeightStatistic / maxTime; // Переменная для пропорции
  var COLUMN_COORDINATE = CLOUD_X + COLUMN_WIDTH; // Отступ столбца по оси Х
  var randomNumber99;
  var i;

  // Нахожу максимальное время в массиве
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  // Функция для получения рандомного значения (максимум и минимум включаются)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для отрисовки облочка с подложкой
  function renderCloud(options) {
    options.context.fillStyle = options.color;
    options.context.fillRect(options.x,
        options.y,
        options.CLOUD_WIDTH,
        options.CLOUD_HEIGHT);
  }

  // Вызываю функцию отрисовки облочка с подложкой
  renderCloud({
    context: ctx,
    x: CLOUD_X + SHADOW_COORDINATE,
    y: CLOUD_Y + SHADOW_COORDINATE,
    color: 'rgba(0, 0, 0, 0.7)',
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
  });

  renderCloud({
    context: ctx,
    x: CLOUD_X,
    y: CLOUD_Y,
    color: 'white',
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
  });

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
      ctx.fillRect(COLUMN_COORDINATE + i * GAP_WIDTH,
          NAMES_HEIGHT - times[i] * proportion,
          COLUMN_WIDTH,
          times[i] * proportion - 25);

    } else {
      randomNumber99 = getRandomIntInclusive(0, 100);
      ctx.fillStyle = 'hsl(240,' + randomNumber99 + '%, 50%)';
      ctx.fillRect(COLUMN_COORDINATE + i * GAP_WIDTH,
          NAMES_HEIGHT - times[i] * proportion,
          COLUMN_WIDTH,
          times[i] * proportion - 25);
    }
  }
}

window.renderStatistics = renderStatistics;
