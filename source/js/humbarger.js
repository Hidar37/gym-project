/* eslint-disable linebreak-style */
const humargerBtn = document.getElementById('show-menu');
const changeIcon = document.getElementById('change-icon');
let countMenuClick = 1;
humargerBtn.addEventListener('click', () => {
  if (countMenuClick % 2 === 1) {
    changeIcon.classList.add('fa-solid', 'fa-x');
    changeIcon.classList.remove('fas', 'fa-bars');
    // show menu
    document.getElementById('nav-menu').style.left = '0%';
    countMenuClick += 1;
  } else {
    changeIcon.classList.add('fas', 'fa-bars');
    changeIcon.classList.remove('fa-solid', 'fa-x');
    // show menu
    document.getElementById('nav-menu').style.left = '-100%';
    countMenuClick += 1;
  }
});