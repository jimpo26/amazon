// use this to run with fetch
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

//use this to run on bookmarks
javascript:(function()%7Bconst%20item%20%3D%20document.getElementsByClassName(%22a-box%22)%5B0%5D%3B%3Bif%20(%20item%20%3D%3D%20null)%7B%3Bconst%20err%20%3D%20'You%20have%20to%20run%20this%20script%20on%20Amazon.%5CnThen%20the%20add%20to%20cart%20button%20will%20appear.'%3Balert(err)%3Bthrow%20new%20Error(err)%3B%7Delse%7B%3Bif(document.getElementsByClassName(%22a-button-input%20attach-dss-atc%22).length%20%3D%3D%200)%7B%3Bif(document.getElementsByClassName(%22a-color-price%20a-text-bold%22).length%20%3E%200)%7B%3Bvar%20out=document.getElementsByClassName(%22a-color-price%20a-text-bold%22)[0].innerHTML = "Electratech%20|%20Cart<br>Click%20here%20to%20add%20the%20item%20to%20the%20cart";document.getElementsByClassName("a-color-price%20a-text-bold")[0].setAttribute("style","color:%20#3d35df%20!important;");%3Bvar%20btn%20%3D%20document.createElement(%22button%22)%3Bbtn.setAttribute(%22class%22%2C%22a-button-input%20attach-dss-atc%22)%3Bbtn.setAttribute(%22href%22%2C%20%22#addToCart%22)%3Bdocument.getElementsByClassName(%22a-section%20a-spacing-small%20a-text-center%22)%5B0%5D.appendChild(btn)%3B%7D%7D%7D%7D)()
