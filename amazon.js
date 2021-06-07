function cartBtn() 
{
    const item = document.getElementById("#ppd");
    if ( item == null)
    {
        console.log("Item è null")
        const err = 'You have to run this script on Amazon.\nThen the add to cart button will appear.';
        alert(err);
        throw new Error(err);
    }
    else
    {
        console.log("sono nell'else")
        if(document.getElementByClassName("a-button-input attach-dss-atc").lenght == 0)
        {
            console.log("if 1")
            if(document.getElementByClassName("a-section a-spacing-small a-text-center").lenght > 0)
            {
                console.log("if 2")
                document.getElementByClassName("product-out-of-stock")[0].remove();
                var btn = document.createElement("button");
                btn.setAttribute("class","a-button-input attach-dss-atc");
                btn.setAttribute("href","/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance");
                btn.setAttribute("style", "color: #353DD4 !important;background-color: ##599EE3 !important;border: 2px solid #353DD4 !important;");
                btn.innerHTML = "Electratech | Cart";
                document.getElementByClassName("a-box-inner")[0].appendChild(button)
            }
        }
    }
    Drupal.ajax.bindAjaxLinks(document);
    return item;
}
