/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const data = [
  {
    cardHeader: 'Jay Cutler',
    cardText: 'Gread place for trining. Great job on creating this Gym.',
  },
  {
    cardHeader: 'Andri',
    cardText: 'WOW! this is one of the best place i have trine great equipment love it.',
  },
  {
    cardHeader: 'Ali Mohammad',
    cardText: 'Very clean and well equipment. Love the instactore for working very hard on us.',
  },
  {
    cardHeader: 'Anila Fergosen',
    cardText: 'Very clean and gread place to train your body.',
  },
  {
    cardHeader: 'Ana Lee',
    cardText: 'Best place for perpearing for profissinal carrear.',
  },
];

for (let x = 0; x < data.length; x++) {
  document.getElementById(`card-header-${x + 1}`).textContent = data[x].cardHeader;
  document.getElementById(`card-body-${x + 1}`).textContent = data[x].cardText;
}