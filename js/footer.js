import navs from '../data/navigations.js'

const navsEl = document.querySelector('footer .navigations');
navs.forEach(function (nav) {
  const mapEl = document.createElement('div');
  mapEl.classList.add('map');

  let mapList = '';
  nav.maps.forEach(function (map) {
    mapList += /* html */`
      <li>
        <!-- <a href="${map.url}">${map.name}</a> -->
        <a href="javascript:void(0)">${map.name}</a>
      </li>
    `;
  })

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
      <span class="icon">+</span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `;

  navsEl.append(mapEl);
})


const thisYearEl = document.querySelector('span.this-year');
thisYearEl.textContent = new Date().getFullYear();


const mapEls = document.querySelectorAll('footer .navigations .map');
mapEls.forEach(function (el) {
  const h3El = el.querySelector('h3');
  h3El.addEventListener('click', function () {
    el.classList.toggle('active');
  })
})