const timer = document.querySelector('.relogio');

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

let seconds = 0;
let timeCount;

function startTimer() {
  timeCount = setInterval(function () {
    seconds++;
    timer.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('start')) {
    clearInterval(timeCount);
    startTimer();
    timer.classList.remove('stopped');
  }

  if (el.classList.contains('stop')) {
    clearInterval(timeCount);
    timer.classList.add('stopped');
  }

  if (el.classList.contains('reset')) {
    clearInterval(timeCount);
    timer.innerHTML = '00:00:00';
    seconds = 0;
    timer.classList.remove('stopped');
  }
});
