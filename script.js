const accessKey = 'wgPFD6y6RQH9tvGksuj9F6hHZCxLWxC7FkRhychBaBU'
const Numcount = 30;
const API = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${Numcount}`;



// get photos from api function 

async function getPhotos(){
  try{
    const response = await fetch(API); 
    const data = await response.json();
    console.log(data)
  }
  catch(error){
    // catch error
    console.log(error);
  }
}


// ON LOAD 
getPhotos();