function btn(){
    const item = document.getElementById("outOfStock");
    if (item === null){
        const err = "You have to run this script on Amazon's not available item page.\nThen the add to cart button will appear.";
        alert(err);
        throw new Error(err);
    }
    else{
        const btn = document.createElement("button");
        btn.setAttribute("href","#addToCart");
        btn.setAttribute("style","background-color: #BF8F00 !important; border-radius: 10px; border: 0px; padding: 10px;");
        btn.setAttribute("id","addToCart");
        btn.innerText = "Jimpo26 | Cart\nClick here to add the item to the cart";
        item.prepend(btn);
    }
}
btn()
