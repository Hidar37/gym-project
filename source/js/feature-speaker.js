/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const featureSpeaker = document.getElementById('feature-speaker');
const data = [
  {
    image: 'source/images/jay-cutler.jpg',
    cardHeader: 'Jay Cutler',
    job: 'Professional Body Builder.',
    cardText: 'Gread place for trining. Great job on creating this Gym.',
  },
  {
    image: 'source/images/andri.jpg',
    job: 'Professional Body Builder.',
    cardHeader: 'Andri',
    cardText: 'WOW! this is one of the best place i have trine great equipment love it.',
  },
  {
    image: 'source/images/body.jpg',
    job: 'Professional Body Builder.',
    cardHeader: 'Ali Mohammad',
    cardText: 'Very clean and well equipment. Love the instactore for working very hard on us.',
  },
  {
    image: 'source/images/women1.jpg',
    job: 'Professional Body Builder.',
    cardHeader: 'Anila Fergosen',
    cardText: 'Very clean and gread place to train your body.',
  },
  {
    image: 'source/images/women2.jpg',
    job: 'Professional Body Builder.',
    cardHeader: 'Ana Lee',
    cardText: 'Best place for perpearing for Professional carrear.',
  },
  {
    image: 'source/images/phile-health.jpg',
    job: 'Professional Body Builder.',
    cardHeader: 'jo Lee',
    cardText: 'Best place for perpearing for Professional carrear.',
  },
];
for (let x = 0; x < data.length; x++) {
  const featureSpeakerBody = `<div class="feature-card">
  <!-- card -image -->
  <div class="feature-card-image">
    <img src="source/images/background-black-white-squares-.jpg" alt="Black and white background">
    <img src="${data[x].image}" alt="${data[x].cardHeader}" class="body-builder-image">
  </div>
  <!-- card description (Body) -->
  <div class="feature-card-body">
    <h6>${data[x].cardHeader} <span id="feature-card-job">${data[x].job}</span></h6>
    <p>${data[x].cardText}</p>
  </div>
</div>`;
  // add to html
  featureSpeaker.insertAdjacentHTML('beforeend', featureSpeakerBody);
}