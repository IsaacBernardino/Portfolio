// Elementos do html

// slider
const projetoEl = document.querySelector('.projeto');

const counterEl =  document.querySelector('#counter');

// botoes
const nextButtonEl = document.querySelector('#next');
const prevButtonEl = document.querySelector('#prev');

let imageIndex = 0;

const imagens = [
  'resources/images/screenshots/manager1.png',
  'resources/images/screenshots/todo.png',
  'resources/images/screenshots/Stopwatch.png',
  'resources/images/screenshots/nexttep1.png',
  'resources/images/screenshots/nexttep2.png'
]

nextButtonEl.addEventListener('click', nextImage);
prevButtonEl.addEventListener('click', prevImage);

function updateSlider (){
  requestAnimationFrame(updateSlider);

  projetoEl.src = imagens[imageIndex];

  imageIndex <= 0 ? prevButtonEl.style.visibility = 'hidden' : prevButtonEl.style.visibility = 'visible';
  imageIndex >= imagens.length - 1 ? nextButtonEl.style.visibility = 'hidden' : nextButtonEl.style.visibility = 'visible';
}

function nextImage (){
  if(imageIndex < imagens.length - 1){
    imageIndex++;
  }
}

function prevImage(){
  if(imageIndex > 0){
    imageIndex--;
  }
}

updateSlider()
counterEl.innerHTML = `${imagens.length} Imagens`;
// botoes de contato
document.querySelector('#goto-git').addEventListener('click',() => {
  window.open('https://github.com/IsaacBernardino');
});


document.querySelector('#goto-linke').addEventListener('click',() => {
  window.open('https://www.linkedin.com/in/isaac-bernardino-24884a121/');
});

document.querySelector('#goto-fb').addEventListener('click',() => {
  window.open('https://www.facebook.com/isaacbernadino7');
});

