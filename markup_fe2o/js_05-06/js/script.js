// time - время с момента запуска таймера
var time = 0;
// running - запущен ли таймер
var running = false;
// btnClicked -  была ли нажата кнопка
var rstClicked = false;
var linkReset = document.querySelector('.button__reset');
var linkStart = document.querySelector('.button__start');

linkReset.onclick = function() {
  btnClicked = true;
  rstClicked = true;
  reset();
}

linkStart.onclick = function() {
  btnClicked = true;
  startPause();
}

function startPause() {
  if ( btnClicked ) {
    if (running == false) {
      running = true;
      increment();
      document.querySelector('.button__start').innerHTML = "Пауза";
    } else {
      running = false;
      document.querySelector('.button__start').innerHTML = "Продолжить";
    }
  }
}

function reset() {
  if ( btnClicked ) {
    running = false;
    time = 0;
    document.querySelector('.button__start').innerHTML = "Пуск";
    document.querySelector('.tablo').innerHTML = "0:00:00:000";
  }
}

function increment() {
  if ( running ) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time/10/60)
      var secs = Math.floor(time/10 % 60)
      var hours = Math.floor(time/10/60/60)
      var tenth = time % 10;
      // var tenth = time % 1;

      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.querySelector('.tablo').innerHTML =  hours + ":" + mins + ":" +
        secs + ":" + tenth + "00";
      increment();
    }, 100)
  }
  if ( rstClicked ) {
    document.querySelector('.tablo').innerHTML = "0:00:00:000";
    rstClicked = false;
  }
}
