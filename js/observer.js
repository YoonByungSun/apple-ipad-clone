const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('show');
    } else {
      entry.target.classList.add('show');
    }
  })
})
const infoEls = document.querySelectorAll('.info');
infoEls.forEach(function (el) {
  io.observe(el);
})