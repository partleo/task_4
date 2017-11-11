'use strict';
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const loadHTML = (query, url) => {
  const element = document.querySelector(query);
  fetch(url).then((response) => {
    return response.text();
  }).then((myText) => {
    element.innerHTML = myText;
  });
};

loadHTML('ul', 'images.html');
