main()

async function main() {
    const articles= await getArticles()
    console.log(articles)
    displayArticles(articles)
}
function getArticles() {
   return fetch("http://localhost:3000/api/products")
    //on va lui attacher des fonctions qu'il va executer quand il aura recuperer les d
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    })
.then (function(articles)
 {//dans ce zen on recupere tous les articles}//

return articles
})
.catch (function(error) {//si il ne marche pas on utilisera la fonction catch}
alert(error)
})}

function displayArticles(articles) {
 const items = document.getElementById("items")
 for(article of articles){
     items.innerHTML+=`<a href="./product.html?id=${article._id}">
     <article>
       <img src="${article.imageUrl}" alt="${article.altTxt}">
       <h3 class="productName">${article.name}</h3>
       <p class="productDescription">${article.description}</p>
     </article>
   </a>
     
     `
 }
}