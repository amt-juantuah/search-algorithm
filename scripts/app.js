const search = () => {

    // get search term as is been typed
    const searchbox = document.querySelector("#search-item").value.toUpperCase();

    const storeItems = document.querySelector("#product-list");
    const products = storeItems.querySelectorAll(".product");

    // go through all products
    for (let i = 0; i < products.length; i++) {
        let match = products[i].querySelector("h2");        

        if (match) {
            let textTerm = match.innerHTML.toUpperCase() || match.textContent.toUpperCase();

            // compare searchbox value to product names 
            // all in uppercase for easy comarison
            if (textTerm.indexOf(searchbox) > -1){
                products[i].style.display = "";
            }
            else {
                products[i].style.display = "none";
            }
        }
    }
}