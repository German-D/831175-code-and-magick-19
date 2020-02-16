'use strict';

(function () {
  var setupDialogElement = window.utils;

  var dialogHandle = setupDialogElement.querySelector('.upload');

  var dialogHandleMousedownHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var documentMouseMovehandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var documentMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', documentMouseMovehandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', documentMouseMovehandler);
    document.addEventListener('mouseup', documentMouseUpHandler);

  };

  dialogHandle.addEventListener('mousedown', dialogHandleMousedownHandler);
})();
