// DOM Selectors
const textEl = document.getElementById('text');
const skillsBtn = document.getElementById('skills-btn');
const homeText = 'A FRONT END DEVELOPER';
let idx = 1;
let speed = 225;
let i = 0;

textAnimation()

// Skills btn event listener
skillsBtn.addEventListener('click', sliderNumber);

// Text typing effect
function textAnimation() {
  textEl.innerText = homeText.slice(0, idx);

  idx++

  if(idx > homeText.length) {
    idx = 1
  }

  setTimeout(textAnimation, speed)
}

// Move progress slider numbers + width - skills page
function sliderNumber() {
  const sliderNum1 = document.querySelector('.html')
  const sliderNum2 = document.querySelector('.css')
  const sliderNum3 = document.querySelector('.js')
  const sliderNum4 = document.querySelector('.react')
  sliderNum1.classList.add('runAnimation')
  sliderNum2.classList.add('runAnimation')
  sliderNum3.classList.add('runAnimation')
  let width = 10;
  let id = setInterval(frame, 60);

    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        console.log(width)
        sliderNum1.style.width = width + "%";
        sliderNum1.innerHTML = width + "%";
        sliderNum2.style.width = width + "%";
        sliderNum2.innerHTML = width + "%";
        sliderNum3.style.width = width + "%";
        sliderNum3.innerHTML = width + "%";
        sliderNum4.style.width = width + "%";
        sliderNum4.innerHTML = width + "%";
      }
}
}


