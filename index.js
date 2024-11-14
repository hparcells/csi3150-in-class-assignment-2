function show(letter) {
  const element = document.querySelector(`.infobox-${letter}`);
  
  element.classList.remove('hidden');
}

function hide(letter) {
  const element = document.querySelector(`.infobox-${letter}`);

  element.classList.add('hidden');
}
