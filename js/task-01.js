const categories = document.querySelector("#categories")
const categoriesLength = categories.children.length;

console.log(`Number of categories: ${categoriesLength}`);


const itemEl = document.querySelectorAll(".item");

itemEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.childElementCount }`)
})

