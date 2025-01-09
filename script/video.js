// 1. Fetch, Load and Show Categories on HTML


// Create LoadCategories 
const loadCategories = () => {
 // fetch the data
 fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error))
}

loadCategories()

// Create DisplayCategories
const displayCategories = (data) => {
 console.log(data)
}