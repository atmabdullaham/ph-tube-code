// 1. Fetch, Load and Show Categories on HTML


// Create LoadCategories 
const loadCategories = () => {
 // fetch the data
 fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error))
}
const loadVideos = () => {
 // fetch the data
 fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then((res) => res.json())
  .then((data) => displayVideos(data.videos))
  .catch((error) => console.log(error))
}


loadCategories()
loadVideos()

// Create DisplayCategories
const displayCategories = (categories) => {
 const categoryContainer = document.getElementById("categories")
 categories.forEach(item => {
  console.log(item)

  // create a button
  const button = document.createElement("button")
  button.classList = "btn";
  button.innerText = item.category;

  // add button to category container

  categoryContainer.appendChild(button)

 });
}



// Display Videos
const displayVideos = (videos) => {
 console.log(videos)
 const videoContainer = document.getElementById("videos")
 videos.forEach(video => {
  console.log(video)
  const card = document.createElement("div");
  card.classList = "card card-compact"
  card.innerHTML = `
  <figure>
    <img
      src=${video.thumbnail} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title
   }</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  `

  videoContainer.appendChild(card)



 });
}