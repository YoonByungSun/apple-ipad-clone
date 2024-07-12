import ipads from '../data/ipads.js'

const itemsEl = document.querySelector('section.compare .items');
ipads.forEach(function (ipad) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  let colorList = '';
  ipad.colors.forEach(function (color) {
    colorList += /* html */ `
      <li style="background-color: ${color};"></li>
    `;
  })

  itemEl.innerHTML = /* html */ `
    <div class="thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}" />
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
    <button class="btn">구입하기</button>
    <!-- <a href="${ipad.url}" class="link">더 알아보기</a> -->
    <a href="javascript:void(0)" class="link">더 알아보기</a>
  `;

  itemsEl.append(itemEl);
})