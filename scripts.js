const picArray = [{
    name: "Project one",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/AlexRapp.png",
    page: "innermovie.html"
  },
  {
    name: "Project two",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/KazuMakino.png", 
    page: "innermovie.html"
  },
  {
    name: "Project something",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/promo.jpg",
    page: "innermovie.html"
  },
  {
    name: "Project lebil",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/pic1.png",
    page: "innermovie.html"
  },
  {
    name: "Project another something",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/Alex-2.png",
    page: "innermovie.html"
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/Atonal.jpg",
    page: "innermovie.html"
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/KingMidasSound.jpg",
    page: "innermovie.html"
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020", 
    picture: "content/pictures/LocalSuicide-AlreadyThere.jpg",
    page: "innermovie.html"
  },
  
];


function createGalleryElement(movieName, location, year, imageUrl, pageUrl) {
    const galLink = document.createElement("a");
    galLink.classList.add("galLink");
    galLink.href = pageUrl;
    
    const workGal = document.createElement("div");
    workGal.classList.add("workGal");
    workGal.setAttribute("id", movieName);
    galLink.appendChild(workGal);
    workGal.style.backgroundImage = `url(${imageUrl})`;

    const textInfo = document.createElement("div");
    textInfo.classList.add("textInfo");
    workGal.appendChild(textInfo);

    const movieHeadline = document.createElement("h3");
    movieHeadline.innerHTML = movieName;
    const movieText = document.createElement("p");
    movieText.innerHTML = location + " - " + year;
    movieText.classList.add("descriptionHover");

    textInfo.appendChild(movieHeadline);
    textInfo.appendChild(movieText);


    const workContainer = document.querySelector(".workContainer");
    workContainer.appendChild(galLink);

}

function buildGallery (array) {
    for (let i = 0; i < picArray.length; i++) {
        createGalleryElement(array[i].name, array[i].location, array[i].year, array[i].picture, array[i].page);
    }

}

buildGallery(picArray);



const movieHover = document.querySelectorAll(".workGal");
movieHover[0].addEventListener("mouseenter", function(event) {
  const descriptionHover = movieHover[0].querySelector(".descriptionHover");
  descriptionHover.style.display = "block";
  
});
movieHover[0].addEventListener("mouseover", function(event) {
  const descriptionHover = movieHover[0].querySelector(".descriptionHover");
  descriptionHover.style.display = "none";
})