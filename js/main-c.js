'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element


const showImages = () => {
  const ul = document.querySelector('ul');
  fetch('images.json').then((response) => {
    return response.json();
  }).then((myJson) => {
    myJson.forEach((image) => {
      // put code here
      let li = document.createElement("li");
      let figure = document.createElement("figure");
      let a = document.createElement("a");
      a.setAttribute("href", "img/original/"+image.mediaThumb);
      let img = document.createElement("img");
      img.setAttribute("src", "img/thumbs/"+image.mediaUrl);
      a.appendChild(img);
      let figcaption = document.createElement("figcaption");
      let h3 = document.createElement("H3");
      let node = document.createTextNode(image.mediaTitle);
      h3.appendChild(node);
      figcaption.appendChild(h3);
      figure.appendChild(figcaption);
      figure.appendChild(a);
      li.appendChild(figure);
      ul.appendChild(li);
    });
  });
};

showImages();
