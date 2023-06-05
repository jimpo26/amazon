
# Amazon add to cart button
Why this script? 
There's such a big problem in Amazon's cache. Sometimes, when new offers appear in the offers' list, the cache doesn't update and you can't see the product before it finishes again (think at the ps5 and GPUs in 2020/2021). 
This script creates a button that can perform an addToCart request, so if the product is available in the database, you will be able to buy it!
## How to use?
There are two methods:

1. You can use fetch 
2. You can paste the entire code in the bookmarklet

In the first scenario, you have to put the following code into the bookmarklet
`
javascript:fetch("https://raw.githubusercontent.com/jimpo26/amazon/main/amazon.js").then((r)=>r.text()).then((text)=>eval(text))
`
and, when you are in a "Not available" amazon's page, a button will appear. 
But, wait a minute: why is this solution really bad?
There a few reasons
First of all, the fetch function performs a request to `raw.githubusercontent.com` server, and this takes quite a bit to receive the response, because there are lot of things to do (TCP connection with three way handshake, TLS key exchange, ecc...).
But this is not all. The code above uses the eval function, that executes code on your computer, and it could be really dangerous. Check out [this link](https://stackoverflow.com/questions/18269797/what-does-eval-do-and-why-its-evil) if you want to know more about the evil eval function

The second way it's the better. You have to copy the code from the file amazonEncoded.js (it's the exact same code that there's in the amazon.js file, but it's encoded so written in a single line), and then paste it into a bookmark in your favourite browser. To use it, simply click on the bookmark and voilà, the button will appear.
