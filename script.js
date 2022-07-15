const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

const accessKey = "wgPFD6y6RQH9tvGksuj9F6hHZCxLWxC7FkRhychBaBU";
const Numcount = 30;
const API = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${Numcount}`;

// get photos from api function

let photosArray = [];

async function getPhotos() {
  try {
    const response = await fetch(API);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error
    console.log(error);
  }
}

// check if we arrived at the bottom of page
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    console.log("load more!!");
    getPhotos();
  }
});

//display photo function (links and photos)
function displayPhotos() {
  // forEach over the array
  photosArray.forEach((photo) => {
    console.log(photo.links.html);
    // creating <a> element to link the image
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);

    // create image tag
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.description);
    img.setAttribute("title", photo.description);

    // put <img> tag inside <a> tag

    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

// ON LOAD
getPhotos();
