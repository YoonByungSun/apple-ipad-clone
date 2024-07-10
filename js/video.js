const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .controller--play');
const pauseBtn = document.querySelector('.stage .controller--pause');

playBtn.addEventListener('click', function () {
  video.play();
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
})
pauseBtn.addEventListener('click', function () {
  video.pause();
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
})