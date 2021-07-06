// use this to run with fetch (in raw obviously)
//https://raw.githubusercontent.com/jimpo26/amazon/main/amazon.js
function btn(){
    const item = document.getElementsByClassName("a-box")[0];
    if (item === null){
        const err = "You have to run this script on Amazon's not available item page.\nThen the add to cart button will appear.";
        alert(err);
        throw new Error(err);
    }
    else{
        if(document.getElementsByClassName("a-button-input attach-dss-atc").length === 0){
            if(document.getElementsByClassName("a-color-price a-text-bold").length > 0){
                document.getElementsByClassName("a-color-price a-text-bold")[0].innerHTML = "Electratech | Cart<br>Click here to add the item to the cart";
                document.getElementsByClassName("a-color-price a-text-bold")[0].setAttribute("style","color: #3d35df !important;");
                var btn = document.createElement("button");
                btn.setAttribute("class","a-button-input attach-dss-atc");
                btn.setAttribute("href","#addToCart");
                document.getElementsByClassName("a-section a-spacing-small a-text-center")[0].appendChild(btn);

            }
        }
    }
}
btn()

//to run this script on bookmarks, copy the script from pastebin https://pastebin.com/raw/SNVHBhEg and paste it in the bookmark
