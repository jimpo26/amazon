/*function cartBtn() 
{
    console.log("Comincia");
    const item = document.getElementById("#ppd");
    if ( item == null)
    {
        console.log("Item è null");
        const err = 'You have to run this script on Amazon.\nThen the add to cart button will appear.';
        alert(err);
        throw new Error(err);
    }
    else
    {
        console.log("sono nell'else");
        if(document.getElementsByClassName("a-button-input attach-dss-atc").length == 0)
        {
            console.log("if 1");
            if(document.getElementsByClassName("a-section a-spacing-small a-text-center").length > 0)
            {
                console.log("if 2");
                document.getElementsByClassName("product-out-of-stock")[0].remove();
                var btn = document.createElement("button");
                btn.setAttribute("class","a-button-input attach-dss-atc");
                btn.setAttribute("href","/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance");
                btn.setAttribute("style", "color: #353DD4 !important;background-color: ##599EE3 !important;border: 2px solid #353DD4 !important;");
                btn.innerHTML = "Electratech | Cart";
                document.getElementsByClassName("a-box-inner")[0].appendChild(button);
            }
        }
    }
    Drupal.ajax.bindAjaxLinks(document);
    return item;
}*/

function cartBtn() 
{
    console.log("Comincia");
    const item = document.getElementsByClassName("product-page-description col-flex-lg-5 col-flex-sm-12");
    if ( item == null)
    {
        console.log("Item è null");
        const err = 'You have to run this script on Amazon.\nThen the add to cart button will appear.';
        alert(err);
        throw new Error(err);
    }
    else
    {
        console.log("sono nell'else");
        if(document.getElementsByClassName("a-button-input attach-dss-atc").length == 0)
        {
            console.log("if 1");
            if(document.getElementsByClassName("product-out-of-stock").length > 0)
            {
                console.log("if 2");
                document.getElementsByClassName("product-out-of-stock")[0].remove();
                var btn = document.createElement("button");
                btn.setAttribute("class","btn-shopping-cart btn-shopping-neutral use-ajax");
                btn.setAttribute("href", "/en/direct-buy/add-to-cart/5358857600");
                btn.setAttribute("style", "color: #353DD4 !important;background-color: #599EE3 !important;border: 2px solid #353DD4 !important;");
                btn.innerHTML = "Electratech | Cart";
                document.getElementsByClassName("product-page-description")[0].appendChild(button);
            }
        }
    }
    Drupal.ajax.bindAjaxLinks(document);
    return item;
}

if (window.location.href.includes("direct-buy")) {
    if (cartBtn() != null) {
        document.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax")[0].click();
    }
}
