// Seleciona o botão e os elementos de navegação
const button = document.getElementById('button');
const navigation = document.querySelector('.navigation');

// Manipula o clique no botão de navegação móvel
function handleClick() {
  button.classList.toggle('active');
  navigation.classList.toggle('active');
}

// Seleciona o botão de alternância de modo e os elementos relevantes
const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const darkStyle = document.getElementById('darkStyle');
const lightStyleHref = './styles/global-Light.css';
const svgElements = document.querySelectorAll('.navigation__social img, .footer-links img');

// Manipula a alternância de modo
toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark');
  
  // Alterna a classe do corpo
  body.classList.toggle('dark', !isDarkMode);
  body.classList.toggle('light', isDarkMode);
  
  // Alterna a folha de estilo
  if (isDarkMode) {
    darkStyle.setAttribute('href', lightStyleHref);
  } else {
    darkStyle.setAttribute('href', './styles/global.css');
  }
  
  // Altera os ícones SVG
  svgElements.forEach(img => {
    const currentSrc = img.getAttribute('src');
    if (isDarkMode) {
      img.setAttribute('src', currentSrc.replace('./assets/', './assets/lightMode-Vectors/'));
    } else {
      img.setAttribute('src', currentSrc.replace('./assets/lightMode-Vectors/', './assets/'));
    }
  });

  // Altera o ícone e texto do botão de alternância
  const icon = toggleButton.querySelector('.icon');
  const text = toggleButton.querySelector('.text');
  
  if (isDarkMode) {
    icon.classList.replace('fa-sun', 'fa-moon');
    text.textContent = 'Dark';
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
    text.textContent = 'Light';
  }
});


function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 115 * i);
  });
}

const text = document.querySelector('p');

typeWriter(text);


