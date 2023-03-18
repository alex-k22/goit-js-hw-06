const categoriesEl = document.querySelector("#categories");
const catArray = categoriesEl.children;
console.log(`Number of categories: ${catArray.length}`);

[...catArray].forEach(element => {
    const catName = element.querySelector("h2").textContent;
    console.log("")
    console.log(`Category: ${catName}`);
        
    const subcatQuantity = element.querySelector("ul").children.length;
    console.log(`Elements: ${subcatQuantity}`)
});