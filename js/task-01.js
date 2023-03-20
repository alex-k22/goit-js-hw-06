const categoriesEl = document.querySelector("#categories");
const catArray = categoriesEl.children;
console.log(`Number of categories: ${catArray.length}`);

[...catArray].forEach(element => {
    const catName = element.firstElementChild.textContent;
    console.log("")
    console.log(`Category: ${catName}`);
        
    const subcatQuantity = element.lastElementChild.children.length;
    console.log(`Elements: ${subcatQuantity}`)
});