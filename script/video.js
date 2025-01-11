// 1. Fetch, Load and Show Categories on HTML

function getTimeString(time) {
 if (time >= 31536000) {
  const year = parseInt(time / 31536000);
  let remainingSecond = time % 31536000;
  const month = parseInt(remainingSecond / 2592000);
  remainingSecond = remainingSecond % 2592000
  const day = parseInt(remainingSecond / 86400);
  remainingSecond = remainingSecond % 86400;
  const hour = parseInt(remainingSecond / 3600);
  remainingSecond = remainingSecond % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${year} year ${month} month ${day} day ${hour} hour ${minute} minute ${remainingSecond} second ago`
 }


 else if (time < 31536000 && time >= 2592000) {
  const month = parseInt(time / 2592000);
  let remainingSecond = time % 2592000
  const day = parseInt(remainingSecond / 86400);
  remainingSecond = remainingSecond % 86400;
  const hour = parseInt(remainingSecond / 3600);
  remainingSecond = remainingSecond % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${month} month ${day} day ${hour} hour ${minute} minute ${remainingSecond} second ago`
 }
 else if (time < 2592000 && time >= 86400) {
  const day = parseInt(time / 86400);
  let remainingSecond = time % 86400;
  const hour = parseInt(remainingSecond / 3600);
  remainingSecond = remainingSecond % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${day} day ${hour} hour ${minute} minute ${remainingSecond} second ago`
 } else if (time < 86400 && time >= 3600) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`
 }
 else if (time < 3600 && time >= 60) {
  const minute = parseInt(remainingSecond / 60);
  let remainingSecond = time % 60;
  return `${minute} minute ${remainingSecond} second ago`
 } else if (time < 60) {
  const remainingSecond = time;
  return `${remainingSecond} second ago`
 }








}

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

const removeActiveClass = () => {
 const buttons = document.getElementsByClassName("category-btn");
 for (let btn of buttons) {
  btn.classList.remove("active")
 }
}

const loadCategoryVideo = (id) => {
 fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id} `)
  .then((res) => res.json())
  .then((data) => {
   // sobai k active class remove koraow

   removeActiveClass();
   const activeBtn = document.getElementById(`btn-${id}`);
   activeBtn.classList.add("active")
   displayVideos(data.category)
  })
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
  const buttonContainer = document.createElement("div")
  buttonContainer.innerHTML = `
  <button id="btn-${item.category_id}" onClick = "loadCategoryVideo(${item.category_id})" class = "btn category-btn" >
  ${item.category}
  </button>
  `



  // add button to category container

  categoryContainer.appendChild(buttonContainer)

 });
}



// Display Videos
const displayVideos = (videos) => {

 const videoContainer = document.getElementById("videos")
 videoContainer.innerHTML = "";

 if (videos.length == 0) {
  videoContainer.classList.remove("grid");
  videoContainer.innerHTML = `
  <div class = "min-h-[300px] flex flex-col gap-5 justify-center items-center" >
  <img src = "./assets/Icon.png"  />
  <h2 class= "text-center text-xl font-bold" > No Content Here in this Category</h2>
  
  </div>
  `
  return;
 } else {
  videoContainer.classList.add("grid")
 }

 videos.forEach(video => {
  console.log(video)
  const card = document.createElement("div");
  card.classList = "card card-compact"
  card.innerHTML = `
  <figure class = "h-[200px] relative">
    <img class = "h-full w-full object-cover"
      src=${video.thumbnail} />
      ${video.others.posted_date?.length == 0 ? "" : ` <span class = "absolute text-xs right-2 bottom-2 bg-black rounded p-1 text-white" > ${getTimeString(video.others.posted_date)}</span>`}
     
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

         ${video.authors[0].verified == true ? '<img class = "w-5"  src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : ""}
         
         
         </div>
         <p> </p> 
    </div>
    

  </div>
  `

  videoContainer.appendChild(card)



 });
}