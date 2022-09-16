/* eslint-disable linebreak-style */
const humargerBtn = document.getElementById('show-menu');
const changeIcon = document.getElementById('change-icon');
const moreBtn = document.getElementById('more');
let countMenuClick = 1;
let countMoreClick = 1;
humargerBtn.addEventListener('click', () => {
  if (countMenuClick % 2 === 1) {
    changeIcon.classList.add('fa-solid', 'fa-x');
    changeIcon.classList.remove('fas', 'fa-bars');
    // show menu
    document.getElementById('nav-menu').style.left = '0%';
    countMenuClick += 1;
    document.getElementById('hide-me').style.display = 'none';
  } else {
    changeIcon.classList.add('fas', 'fa-bars');
    changeIcon.classList.remove('fa-solid', 'fa-x');
    // show menu
    document.getElementById('nav-menu').style.left = '-100%';
    countMenuClick += 1;
    document.getElementById('hide-me').style.display = 'block';
  }
});

// Show the other feature speakers
moreBtn.addEventListener('click', () => {
  if (countMoreClick % 2 === 1) {
    document.getElementById('more').textContent = 'Show Less';
    document.querySelector('.change-height').style.height = 'auto';
    countMoreClick += 1;
  } else {
    document.getElementById('more').textContent = 'More';
    document.querySelector('.change-height').style.height = '470px';
    countMoreClick += 1;
  }
});