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
  <figure class = "h-[200px]">
    <img class = "h-full w-full object-cover"
      src=${video.thumbnail} />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
         <img class = "w-10 h-10 rounded-full object-cover"
          src= ${video.authors[0].profile_picture} />
    </div>
    
    <div>
         <h2 class = "font-bold">${video.title} </h2>
         <div class = "flex gap-2" >
         <p class = "text-gray-400"> ${video.authors[0].profile_name} </p>
         <img class = "w-5"  src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />
         
         </div>
         <p> </p> 
    </div>
    

  </div>
  `

  videoContainer.appendChild(card)



 });
}